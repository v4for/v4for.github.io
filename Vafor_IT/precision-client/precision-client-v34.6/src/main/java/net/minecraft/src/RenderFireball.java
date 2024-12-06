package net.minecraft.src;

import net.lax1dude.eaglercraft.EaglerAdapter;
import net.lax1dude.eaglercraft.TextureLocation;
import net.lax1dude.eaglercraft.adapter.Tessellator;

public class RenderFireball extends Render {
    private final float field_77002_a;

    public RenderFireball(float par1) {
        this.field_77002_a = par1;
    }

    private static final TextureLocation tex = new TextureLocation("/gui/items.png");

    public void doRenderFireball(EntityFireball par1EntityFireball, double par2, double par4, double par6, float par8, float par9) {
        EaglerAdapter.glPushMatrix();
        EaglerAdapter.glTranslatef((float) par2, (float) par4, (float) par6);
        EaglerAdapter.glEnable(EaglerAdapter.GL_RESCALE_NORMAL);
        float var10 = this.field_77002_a;
        EaglerAdapter.glScalef(var10, var10, var10);
        Icon var11 = Item.fireballCharge.getIconFromDamage(0);
        tex.bindTexture();
        Tessellator var12 = Tessellator.instance;
        float var13 = var11.getMinU();
        float var14 = var11.getMaxU();
        float var15 = var11.getMinV();
        float var16 = var11.getMaxV();
        float var17 = 1.0F;
        float var18 = 0.5F;
        float var19 = 0.25F;
        EaglerAdapter.glRotatef(180.0F - this.renderManager.playerViewY, 0.0F, 1.0F, 0.0F);
        EaglerAdapter.glRotatef(-this.renderManager.playerViewX, 1.0F, 0.0F, 0.0F);
        var12.startDrawingQuads();
        var12.setNormal(0.0F, 1.0F, 0.0F);
        var12.addVertexWithUV(0.0F - var18, 0.0F - var19, 0.0D, var13, var16);
        var12.addVertexWithUV(var17 - var18, 0.0F - var19, 0.0D, var14, var16);
        var12.addVertexWithUV(var17 - var18, 1.0F - var19, 0.0D, var14, var15);
        var12.addVertexWithUV(0.0F - var18, 1.0F - var19, 0.0D, var13, var15);
        var12.draw();
        EaglerAdapter.glDisable(EaglerAdapter.GL_RESCALE_NORMAL);
        EaglerAdapter.glPopMatrix();
    }

    /**
     * Actually renders the given argument. This is a synthetic bridge method,
     * always casting down its argument and then handing it off to a worker function
     * which does the actual work. In all probabilty, the class Render is generic
     * (Render<T extends Entity) and this method has signature public void
     * doRender(T entity, double d, double d1, double d2, float f, float f1). But
     * JAD is pre 1.5 so doesn't do that.
     */
    public void doRender(Entity par1Entity, double par2, double par4, double par6, float par8, float par9) {
        this.doRenderFireball((EntityFireball) par1Entity, par2, par4, par6, par8, par9);
    }
}
