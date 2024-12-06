@echo off
if "%1" == "debug" (
    set OPTIONS=-g4
) else (
    set OPTIONS=-O3 -s OUTLINING_LIMIT=2000
)
set OPTIONS=%OPTIONS% --memory-init-file 0 ^
      -s DEFAULT_LIBRARY_FUNCS_TO_INCLUDE=[] ^
      -s EXPORTED_RUNTIME_METHODS=[] ^
      -s NO_EXIT_RUNTIME=1 ^
      -s NO_BROWSER=1 ^
      -s NO_DYNAMIC_EXECUTION=1 ^
      -s MODULARIZE=1 ^
      -s EXPORT_NAME='Dlm'

emcc %OPTIONS% -o ../docs/catmario.js --js-library lib.js main.cpp
