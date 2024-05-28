package net.minecraft.src;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

public class CraftingManager {
    /**
     * The static instance of this class
     */
    private static final CraftingManager instance = new CraftingManager();

    /**
     * A list of all the recipes added
     */
    private final List recipes = new ArrayList();

    /**
     * Returns the static instance of this class
     */
    public static final CraftingManager getInstance() {
        return instance;
    }

    private CraftingManager() {
        (new RecipesTools()).addRecipes(this);
        (new RecipesWeapons()).addRecipes(this);
        (new RecipesIngots()).addRecipes(this);
        (new RecipesFood()).addRecipes(this);
        (new RecipesCrafting()).addRecipes(this);
        (new RecipesArmor()).addRecipes(this);
        (new RecipesDyes()).addRecipes(this);
        this.recipes.add(new RecipesArmorDyes());
        this.recipes.add(new RecipesMapCloning());
        this.recipes.add(new RecipesMapExtending());
        this.recipes.add(new RecipeFireworks());
        this.addRecipe(new ItemStack(Item.paper, 3), "###", '#', Item.reed);
        this.addShapelessRecipe(new ItemStack(Item.book, 1), Item.paper, Item.paper, Item.paper, Item.leather);
        this.addShapelessRecipe(new ItemStack(Item.writableBook, 1), Item.book, new ItemStack(Item.dyePowder, 1, 0), Item.feather);
        this.addRecipe(new ItemStack(Block.fence, 2), "###", "###", '#', Item.stick);
        this.addRecipe(new ItemStack(Block.cobblestoneWall, 6, 0), "###", "###", '#', Block.cobblestone);
        this.addRecipe(new ItemStack(Block.cobblestoneWall, 6, 1), "###", "###", '#', Block.cobblestoneMossy);
        this.addRecipe(new ItemStack(Block.netherFence, 6), "###", "###", '#', Block.netherBrick);
        this.addRecipe(new ItemStack(Block.fenceGate, 1), "#W#", "#W#", '#', Item.stick, 'W', Block.planks);
        this.addRecipe(new ItemStack(Block.jukebox, 1), "###", "#X#", "###", '#', Block.planks, 'X', Item.diamond);
        this.addRecipe(new ItemStack(Block.music, 1), "###", "#X#", "###", '#', Block.planks, 'X', Item.redstone);
        this.addRecipe(new ItemStack(Block.bookShelf, 1), "###", "XXX", "###", '#', Block.planks, 'X', Item.book);
        this.addRecipe(new ItemStack(Block.blockSnow, 1), "##", "##", '#', Item.snowball);
        this.addRecipe(new ItemStack(Block.snow, 6), "###", '#', Block.blockSnow);
        this.addRecipe(new ItemStack(Block.blockClay, 1), "##", "##", '#', Item.clay);
        this.addRecipe(new ItemStack(Block.brick, 1), "##", "##", '#', Item.brick);
        this.addRecipe(new ItemStack(Block.glowStone, 1), "##", "##", '#', Item.lightStoneDust);
        this.addRecipe(new ItemStack(Block.blockNetherQuartz, 1), "##", "##", '#', Item.netherQuartz);
        this.addRecipe(new ItemStack(Block.cloth, 1), "##", "##", '#', Item.silk);
        this.addRecipe(new ItemStack(Block.tnt, 1), "X#X", "#X#", "X#X", 'X', Item.gunpowder, '#', Block.sand);
        this.addRecipe(new ItemStack(Block.stoneSingleSlab, 6, 3), "###", '#', Block.cobblestone);
        this.addRecipe(new ItemStack(Block.stoneSingleSlab, 6, 0), "###", '#', Block.stone);
        this.addRecipe(new ItemStack(Block.stoneSingleSlab, 6, 1), "###", '#', Block.sandStone);
        this.addRecipe(new ItemStack(Block.stoneSingleSlab, 6, 4), "###", '#', Block.brick);
        this.addRecipe(new ItemStack(Block.stoneSingleSlab, 6, 5), "###", '#', Block.stoneBrick);
        this.addRecipe(new ItemStack(Block.stoneSingleSlab, 6, 6), "###", '#', Block.netherBrick);
        this.addRecipe(new ItemStack(Block.stoneSingleSlab, 6, 7), "###", '#', Block.blockNetherQuartz);
        this.addRecipe(new ItemStack(Block.woodSingleSlab, 6, 0), "###", '#', new ItemStack(Block.planks, 1, 0));
        this.addRecipe(new ItemStack(Block.woodSingleSlab, 6, 2), "###", '#', new ItemStack(Block.planks, 1, 2));
        this.addRecipe(new ItemStack(Block.woodSingleSlab, 6, 1), "###", '#', new ItemStack(Block.planks, 1, 1));
        this.addRecipe(new ItemStack(Block.woodSingleSlab, 6, 3), "###", '#', new ItemStack(Block.planks, 1, 3));
        this.addRecipe(new ItemStack(Block.ladder, 3), "# #", "###", "# #", '#', Item.stick);
        this.addRecipe(new ItemStack(Item.doorWood, 1), "##", "##", "##", '#', Block.planks);
        this.addRecipe(new ItemStack(Block.trapdoor, 2), "###", "###", '#', Block.planks);
        this.addRecipe(new ItemStack(Item.doorIron, 1), "##", "##", "##", '#', Item.ingotIron);
        this.addRecipe(new ItemStack(Item.sign, 3), "###", "###", " X ", '#', Block.planks, 'X', Item.stick);
        this.addRecipe(new ItemStack(Item.cake, 1), "AAA", "BEB", "CCC", 'A', Item.bucketMilk, 'B', Item.sugar, 'C', Item.wheat, 'E', Item.egg);
        this.addRecipe(new ItemStack(Item.sugar, 1), "#", '#', Item.reed);
        this.addRecipe(new ItemStack(Block.planks, 4, 0), "#", '#', new ItemStack(Block.wood, 1, 0));
        this.addRecipe(new ItemStack(Block.planks, 4, 1), "#", '#', new ItemStack(Block.wood, 1, 1));
        this.addRecipe(new ItemStack(Block.planks, 4, 2), "#", '#', new ItemStack(Block.wood, 1, 2));
        this.addRecipe(new ItemStack(Block.planks, 4, 3), "#", '#', new ItemStack(Block.wood, 1, 3));
        this.addRecipe(new ItemStack(Item.stick, 4), "#", "#", '#', Block.planks);
        this.addRecipe(new ItemStack(Block.torchWood, 4), "X", "#", 'X', Item.coal, '#', Item.stick);
        this.addRecipe(new ItemStack(Block.torchWood, 4), "X", "#", 'X', new ItemStack(Item.coal, 1, 1), '#', Item.stick);
        this.addRecipe(new ItemStack(Item.bowlEmpty, 4), "# #", " # ", '#', Block.planks);
        this.addRecipe(new ItemStack(Item.glassBottle, 3), "# #", " # ", '#', Block.glass);
        this.addRecipe(new ItemStack(Block.rail, 16), "X X", "X#X", "X X", 'X', Item.ingotIron, '#', Item.stick);
        this.addRecipe(new ItemStack(Block.railPowered, 6), "X X", "X#X", "XRX", 'X', Item.ingotGold, 'R', Item.redstone, '#', Item.stick);
        this.addRecipe(new ItemStack(Block.railActivator, 6), "XSX", "X#X", "XSX", 'X', Item.ingotIron, '#', Block.torchRedstoneActive, 'S', Item.stick);
        this.addRecipe(new ItemStack(Block.railDetector, 6), "X X", "X#X", "XRX", 'X', Item.ingotIron, 'R', Item.redstone, '#', Block.pressurePlateStone);
        this.addRecipe(new ItemStack(Item.minecartEmpty, 1), "# #", "###", '#', Item.ingotIron);
        this.addRecipe(new ItemStack(Item.cauldron, 1), "# #", "# #", "###", '#', Item.ingotIron);
        this.addRecipe(new ItemStack(Item.brewingStand, 1), " B ", "###", '#', Block.cobblestone, 'B', Item.blazeRod);
        this.addRecipe(new ItemStack(Block.pumpkinLantern, 1), "A", "B", 'A', Block.pumpkin, 'B', Block.torchWood);
        this.addRecipe(new ItemStack(Item.minecartCrate, 1), "A", "B", 'A', Block.chest, 'B', Item.minecartEmpty);
        this.addRecipe(new ItemStack(Item.minecartPowered, 1), "A", "B", 'A', Block.furnaceIdle, 'B', Item.minecartEmpty);
        this.addRecipe(new ItemStack(Item.minecartTnt, 1), "A", "B", 'A', Block.tnt, 'B', Item.minecartEmpty);
        this.addRecipe(new ItemStack(Item.minecartHopper, 1), "A", "B", 'A', Block.hopperBlock, 'B', Item.minecartEmpty);
        this.addRecipe(new ItemStack(Item.boat, 1), "# #", "###", '#', Block.planks);
        this.addRecipe(new ItemStack(Item.bucketEmpty, 1), "# #", " # ", '#', Item.ingotIron);
        this.addRecipe(new ItemStack(Item.flowerPot, 1), "# #", " # ", '#', Item.brick);
        this.addRecipe(new ItemStack(Item.flintAndSteel, 1), "A ", " B", 'A', Item.ingotIron, 'B', Item.flint);
        this.addRecipe(new ItemStack(Item.bread, 1), "###", '#', Item.wheat);
        this.addRecipe(new ItemStack(Block.stairsWoodOak, 4), "#  ", "## ", "###", '#', new ItemStack(Block.planks, 1, 0));
        this.addRecipe(new ItemStack(Block.stairsWoodBirch, 4), "#  ", "## ", "###", '#', new ItemStack(Block.planks, 1, 2));
        this.addRecipe(new ItemStack(Block.stairsWoodSpruce, 4), "#  ", "## ", "###", '#', new ItemStack(Block.planks, 1, 1));
        this.addRecipe(new ItemStack(Block.stairsWoodJungle, 4), "#  ", "## ", "###", '#', new ItemStack(Block.planks, 1, 3));
        this.addRecipe(new ItemStack(Item.fishingRod, 1), "  #", " #X", "# X", '#', Item.stick, 'X', Item.silk);
        this.addRecipe(new ItemStack(Item.carrotOnAStick, 1), "# ", " X", '#', Item.fishingRod, 'X', Item.carrot).func_92100_c();
        this.addRecipe(new ItemStack(Block.stairsCobblestone, 4), "#  ", "## ", "###", '#', Block.cobblestone);
        this.addRecipe(new ItemStack(Block.stairsBrick, 4), "#  ", "## ", "###", '#', Block.brick);
        this.addRecipe(new ItemStack(Block.stairsStoneBrick, 4), "#  ", "## ", "###", '#', Block.stoneBrick);
        this.addRecipe(new ItemStack(Block.stairsNetherBrick, 4), "#  ", "## ", "###", '#', Block.netherBrick);
        this.addRecipe(new ItemStack(Block.stairsSandStone, 4), "#  ", "## ", "###", '#', Block.sandStone);
        this.addRecipe(new ItemStack(Block.stairsNetherQuartz, 4), "#  ", "## ", "###", '#', Block.blockNetherQuartz);
        this.addRecipe(new ItemStack(Item.painting, 1), "###", "#X#", "###", '#', Item.stick, 'X', Block.cloth);
        this.addRecipe(new ItemStack(Item.itemFrame, 1), "###", "#X#", "###", '#', Item.stick, 'X', Item.leather);
        this.addRecipe(new ItemStack(Item.appleGold, 1, 0), "###", "#X#", "###", '#', Item.goldNugget, 'X', Item.appleRed);
        this.addRecipe(new ItemStack(Item.appleGold, 1, 1), "###", "#X#", "###", '#', Block.blockGold, 'X', Item.appleRed);
        this.addRecipe(new ItemStack(Item.goldenCarrot, 1, 0), "###", "#X#", "###", '#', Item.goldNugget, 'X', Item.carrot);
        this.addRecipe(new ItemStack(Block.lever, 1), "X", "#", '#', Block.cobblestone, 'X', Item.stick);
        this.addRecipe(new ItemStack(Block.tripWireSource, 2), "I", "S", "#", '#', Block.planks, 'S', Item.stick, 'I', Item.ingotIron);
        this.addRecipe(new ItemStack(Block.torchRedstoneActive, 1), "X", "#", '#', Item.stick, 'X', Item.redstone);
        this.addRecipe(new ItemStack(Item.redstoneRepeater, 1), "#X#", "III", '#', Block.torchRedstoneActive, 'X', Item.redstone, 'I', Block.stone);
        this.addRecipe(new ItemStack(Item.comparator, 1), " # ", "#X#", "III", '#', Block.torchRedstoneActive, 'X', Item.netherQuartz, 'I', Block.stone);
        this.addRecipe(new ItemStack(Item.pocketSundial, 1), " # ", "#X#", " # ", '#', Item.ingotGold, 'X', Item.redstone);
        this.addRecipe(new ItemStack(Item.compass, 1), " # ", "#X#", " # ", '#', Item.ingotIron, 'X', Item.redstone);
        this.addRecipe(new ItemStack(Item.emptyMap, 1), "###", "#X#", "###", '#', Item.paper, 'X', Item.compass);
        this.addRecipe(new ItemStack(Block.stoneButton, 1), "#", '#', Block.stone);
        this.addRecipe(new ItemStack(Block.woodenButton, 1), "#", '#', Block.planks);
        this.addRecipe(new ItemStack(Block.pressurePlateStone, 1), "##", '#', Block.stone);
        this.addRecipe(new ItemStack(Block.pressurePlatePlanks, 1), "##", '#', Block.planks);
        this.addRecipe(new ItemStack(Block.pressurePlateIron, 1), "##", '#', Item.ingotIron);
        this.addRecipe(new ItemStack(Block.pressurePlateGold, 1), "##", '#', Item.ingotGold);
        this.addRecipe(new ItemStack(Block.dispenser, 1), "###", "#X#", "#R#", '#', Block.cobblestone, 'X', Item.bow, 'R', Item.redstone);
        this.addRecipe(new ItemStack(Block.dropper, 1), "###", "# #", "#R#", '#', Block.cobblestone, 'R', Item.redstone);
        this.addRecipe(new ItemStack(Block.pistonBase, 1), "TTT", "#X#", "#R#", '#', Block.cobblestone, 'X', Item.ingotIron, 'R', Item.redstone, 'T', Block.planks);
        this.addRecipe(new ItemStack(Block.pistonStickyBase, 1), "S", "P", 'S', Item.slimeBall, 'P', Block.pistonBase);
        this.addRecipe(new ItemStack(Item.bed, 1), "###", "XXX", '#', Block.cloth, 'X', Block.planks);
        this.addRecipe(new ItemStack(Block.enchantmentTable, 1), " B ", "D#D", "###", '#', Block.obsidian, 'B', Item.book, 'D', Item.diamond);
        this.addRecipe(new ItemStack(Block.anvil, 1), "III", " i ", "iii", 'I', Block.blockIron, 'i', Item.ingotIron);
        this.addShapelessRecipe(new ItemStack(Item.eyeOfEnder, 1), Item.enderPearl, Item.blazePowder);
        this.addShapelessRecipe(new ItemStack(Item.fireballCharge, 3), Item.gunpowder, Item.blazePowder, Item.coal);
        this.addShapelessRecipe(new ItemStack(Item.fireballCharge, 3), Item.gunpowder, Item.blazePowder, new ItemStack(Item.coal, 1, 1));
        this.addRecipe(new ItemStack(Block.daylightSensor), "GGG", "QQQ", "WWW", 'G', Block.glass, 'Q', Item.netherQuartz, 'W', Block.woodSingleSlab);
        this.addRecipe(new ItemStack(Block.hopperBlock), "I I", "ICI", " I ", 'I', Item.ingotIron, 'C', Block.chest);
        Collections.sort(this.recipes, new RecipeSorter(this));
        System.out.println(this.recipes.size() + " recipes");
    }

    ShapedRecipes addRecipe(ItemStack par1ItemStack, Object... par2ArrayOfObj) {
        String var3 = "";
        int var4 = 0;
        int var5 = 0;
        int var6 = 0;

        if (par2ArrayOfObj[var4] instanceof String[]) {
            String[] var7 = (String[]) par2ArrayOfObj[var4++];

            for (int var8 = 0; var8 < var7.length; ++var8) {
                String var9 = var7[var8];
                ++var6;
                var5 = var9.length();
                var3 = var3 + var9;
            }
        } else {
            while (par2ArrayOfObj[var4] instanceof String) {
                String var11 = (String) par2ArrayOfObj[var4++];
                ++var6;
                var5 = var11.length();
                var3 = var3 + var11;
            }
        }

        HashMap var12;

        for (var12 = new HashMap(); var4 < par2ArrayOfObj.length; var4 += 2) {
            Character var13 = (Character) par2ArrayOfObj[var4];
            ItemStack var15 = null;

            if (par2ArrayOfObj[var4 + 1] instanceof Item) {
                var15 = new ItemStack((Item) par2ArrayOfObj[var4 + 1]);
            } else if (par2ArrayOfObj[var4 + 1] instanceof Block) {
                var15 = new ItemStack((Block) par2ArrayOfObj[var4 + 1], 1, 32767);
            } else if (par2ArrayOfObj[var4 + 1] instanceof ItemStack) {
                var15 = (ItemStack) par2ArrayOfObj[var4 + 1];
            }

            var12.put(var13, var15);
        }

        ItemStack[] var14 = new ItemStack[var5 * var6];

        for (int var16 = 0; var16 < var5 * var6; ++var16) {
            char var10 = var3.charAt(var16);

            if (var12.containsKey(Character.valueOf(var10))) {
                var14[var16] = ((ItemStack) var12.get(Character.valueOf(var10))).copy();
            } else {
                var14[var16] = null;
            }
        }

        ShapedRecipes var17 = new ShapedRecipes(var5, var6, var14, par1ItemStack);
        this.recipes.add(var17);
        return var17;
    }

    void addShapelessRecipe(ItemStack par1ItemStack, Object... par2ArrayOfObj) {
        ArrayList var3 = new ArrayList();
        Object[] var4 = par2ArrayOfObj;
        int var5 = par2ArrayOfObj.length;

        for (int var6 = 0; var6 < var5; ++var6) {
            Object var7 = var4[var6];

            if (var7 instanceof ItemStack) {
                var3.add(((ItemStack) var7).copy());
            } else if (var7 instanceof Item) {
                var3.add(new ItemStack((Item) var7));
            } else {
                if (!(var7 instanceof Block)) {
                    throw new RuntimeException("Invalid shapeless recipy!");
                }

                var3.add(new ItemStack((Block) var7));
            }
        }

        this.recipes.add(new ShapelessRecipes(par1ItemStack, var3));
    }

    public ItemStack findMatchingRecipe(InventoryCrafting par1InventoryCrafting, World par2World) {
        int var3 = 0;
        ItemStack var4 = null;
        ItemStack var5 = null;
        int var6;

        for (var6 = 0; var6 < par1InventoryCrafting.getSizeInventory(); ++var6) {
            ItemStack var7 = par1InventoryCrafting.getStackInSlot(var6);

            if (var7 != null) {
                if (var3 == 0) {
                    var4 = var7;
                }

                if (var3 == 1) {
                    var5 = var7;
                }

                ++var3;
            }
        }

        if (var3 == 2 && var4.itemID == var5.itemID && var4.stackSize == 1 && var5.stackSize == 1 && Item.itemsList[var4.itemID].isDamageable()) {
            Item var11 = Item.itemsList[var4.itemID];
            int var13 = var11.getMaxDamage() - var4.getItemDamageForDisplay();
            int var8 = var11.getMaxDamage() - var5.getItemDamageForDisplay();
            int var9 = var13 + var8 + var11.getMaxDamage() * 5 / 100;
            int var10 = var11.getMaxDamage() - var9;

            if (var10 < 0) {
                var10 = 0;
            }

            return new ItemStack(var4.itemID, 1, var10);
        } else {
            for (var6 = 0; var6 < this.recipes.size(); ++var6) {
                IRecipe var12 = (IRecipe) this.recipes.get(var6);

                if (var12.matches(par1InventoryCrafting, par2World)) {
                    return var12.getCraftingResult(par1InventoryCrafting);
                }
            }

            return null;
        }
    }

    /**
     * returns the List<> of all recipes
     */
    public List getRecipeList() {
        return this.recipes;
    }
}
