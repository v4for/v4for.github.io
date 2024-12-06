self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
    //console.log("I'm installed (Service Worker)");
});
self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
    //console.log("I'm activated (Service Worker)");
});
self.addEventListener('fetch', function (event) {
    let isData = event.request.url.endsWith('.data') || event.request.url.endsWith('.data.br');
    let isWasm = event.request.url.endsWith('.wasm.br') || event.request.url.endsWith('.wasm');
    if (isData || isWasm) {
        event.respondWith((async () => {
            const response = await fetch(event.request);
            const reader = response.body.getReader();
            let receivedLength = 0;

            // Stream the response
            const stream = new ReadableStream({
                async start(controller) {
                    while (true) {
                        const { done, value } = await reader.read();
                        if (done) {
                            receivedLength = -1;
                            break;
                        }
                        receivedLength += value.length;
                        //let percent = (receivedLength / knownFinalSizeInBytes) * 100;
                        //percent = easeOutQuadPercentage(percent);
                        //percent = Math.round(percent * 10) / 10; // Round to one decimal place
                        //
                        //let percentStr = `${percent}%, ${formatNumber(receivedLength)} bytes of ${formatNumber(knownFinalSizeInBytes)} bytes`;
                        //console.log(percentStr);

                        self.clients.matchAll().then(all => all.forEach(client => {
                            client.postMessage({
                                type: 'DOWNLOAD_PROGRESS',
                                receivedLength: receivedLength,
                                isData: isData,
                            });
                        }));

                        // Enqueue the chunk to the stream
                        controller.enqueue(value);
                    }

                    // Close the stream
                    controller.close();
                    reader.releaseLock();
                }
            });

            return new Response(stream, {
                headers: response.headers
            });
        })());
    }
});
function easeOutQuadPercentage(percent) {
    var t = percent / 100;
    return (1 - (1 - t) * (1 - t)) * 100.0;
}
function formatNumber(number) {
    if (number < 1000) {
        return number.toString(); // Return the original number if less than 1000
    } else if (number < 1000000) {
        return (number / 1000).toFixed(1) + 'k'; // Convert to 'k' format for thousands
    } else {
        return (number / 1000000).toFixed(1) + 'M'; // Convert to 'M' format for millions
    }
}
