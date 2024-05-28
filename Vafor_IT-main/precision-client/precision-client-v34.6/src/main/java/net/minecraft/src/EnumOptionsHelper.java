package net.minecraft.src;

class EnumOptionsHelper {
    static final int[] enumOptionsMappingHelperArray = new int[EnumOptions.values().length];

    static {
        try {
            enumOptionsMappingHelperArray[EnumOptions.INVERT_MOUSE.ordinal()] = 1;
        } catch (NoSuchFieldError var14) {
        }

        try {
            enumOptionsMappingHelperArray[EnumOptions.VIEW_BOBBING.ordinal()] = 2;
        } catch (NoSuchFieldError var13) {
        }

        try {
            enumOptionsMappingHelperArray[EnumOptions.ANAGLYPH.ordinal()] = 3;
        } catch (NoSuchFieldError var12) {
        }

        try {
            enumOptionsMappingHelperArray[EnumOptions.RENDER_CLOUDS.ordinal()] = 5;
        } catch (NoSuchFieldError var10) {
        }

        try {
            enumOptionsMappingHelperArray[EnumOptions.CHAT_COLOR.ordinal()] = 6;
        } catch (NoSuchFieldError var9) {
        }

        try {
            enumOptionsMappingHelperArray[EnumOptions.CHAT_LINKS.ordinal()] = 7;
        } catch (NoSuchFieldError var8) {
        }

        try {
            enumOptionsMappingHelperArray[EnumOptions.CHAT_LINKS_PROMPT.ordinal()] = 8;
        } catch (NoSuchFieldError var7) {
        }

        try {
            enumOptionsMappingHelperArray[EnumOptions.USE_SERVER_TEXTURES.ordinal()] = 9;
        } catch (NoSuchFieldError var6) {
        }

        try {
            enumOptionsMappingHelperArray[EnumOptions.SNOOPER_ENABLED.ordinal()] = 10;
        } catch (NoSuchFieldError var5) {
        }

        try {
            enumOptionsMappingHelperArray[EnumOptions.USE_FULLSCREEN.ordinal()] = 11;
        } catch (NoSuchFieldError var4) {
        }

        try {
            enumOptionsMappingHelperArray[EnumOptions.SHOW_CAPE.ordinal()] = 13;
        } catch (NoSuchFieldError var2) {
        }

        try {
            enumOptionsMappingHelperArray[EnumOptions.ANTIALIASING.ordinal()] = 14;
        } catch (NoSuchFieldError var1) {
        }

        try {
            enumOptionsMappingHelperArray[EnumOptions.ENABLE_FOG.ordinal()] = 15;
        } catch (NoSuchFieldError var10) {
        }

        try {
            enumOptionsMappingHelperArray[EnumOptions.CHUNK_UPDATES.ordinal()] = 16;
        } catch (NoSuchFieldError var10) {
        }

        try {
            enumOptionsMappingHelperArray[EnumOptions.ADDERALL.ordinal()] = 17;
        } catch (NoSuchFieldError var10) {
        }
        /* Precision Client settings */
        try {
            enumOptionsMappingHelperArray[EnumOptions.DYNAMIC_FOV.ordinal()] = 50;
        } catch (NoSuchFieldError var10) {
        }
        try {
            enumOptionsMappingHelperArray[EnumOptions.FULLBRIGHT.ordinal()] = 51;
        } catch (NoSuchFieldError var10) {
        }
        try {
            enumOptionsMappingHelperArray[EnumOptions.KEYSTROKES.ordinal()] = 52;
        } catch (NoSuchFieldError var10) {
        }
        try {
            enumOptionsMappingHelperArray[EnumOptions.VIGNETTE.ordinal()] = 53;
        } catch (NoSuchFieldError var10) {
        }
        try {
            enumOptionsMappingHelperArray[EnumOptions.RAIN.ordinal()] = 54;
        } catch (NoSuchFieldError var10) {
        }
        try {
            enumOptionsMappingHelperArray[EnumOptions.ADVANCED_ITEM_TOOLTIPS.ordinal()] = 55;
        } catch (NoSuchFieldError var10) {
        }
    }
}
