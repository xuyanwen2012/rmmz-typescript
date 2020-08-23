import * as PIXI from 'pixi.js';
import {Rectangle} from './Rectangle';
import {Stage} from './Stage';

declare class Bitmap {
  /**
   * The basic object that represents an image.
   *
   * @class
   * @param {number} width - The width of the bitmap.
   * @param {number} height - The height of the bitmap.
   */
  constructor(width: number, height: number);

  /**
   * The base texture that holds the image.
   *
   * @readonly
   * @type PIXI.BaseTexture
   * @name Bitmap#baseTexture
   */
  readonly baseTexture: PIXI.BaseTexture;

  /**
   * The bitmap canvas.
   *
   * @readonly
   * @type HTMLCanvasElement
   * @name Bitmap#canvas
   */
  readonly canvas: HTMLCanvasElement;

  /**
   * The 2d context of the bitmap canvas.
   *
   * @readonly
   * @type CanvasRenderingContext2D
   * @name Bitmap#context
   */
  readonly context: CanvasRenderingContext2D;

  /**
   * Whether the font is bold.
   *
   * @type boolean
   */
  fontBold: boolean;

  /**
   * The face name of the font.
   *
   * @type string
   */
  fontFace: string;

  /**
   * Whether the font is italic.
   *
   * @type boolean
   */
  fontItalic: boolean;

  /**
   * The size of the font in pixels.
   *
   * @type number
   */
  fontSize: number;

  /**
   * The height of the bitmap.
   *
   * @readonly
   * @type number
   * @name Bitmap#height
   */
  readonly height: number;

  /**
   * The bitmap image.
   *
   * @readonly
   * @type HTMLImageElement
   * @name Bitmap#image
   */
  readonly image: HTMLImageElement;

  /**
   * The color of the outline of the text in CSS format.
   *
   * @type string
   */
  outlineColor: string;

  /**
   * The width of the outline of the text.
   *
   * @type number
   */
  outlineWidth: number;

  /**
   * The opacity of the drawing object in the range (0, 255).
   *
   * @type number
   * @name Bitmap#paintOpacity
   */
  paintOpacity: number;

  /**
   * The rectangle of the bitmap.
   *
   * @readonly
   * @type Rectangle
   * @name Bitmap#rect
   */
  readonly rect: Rectangle;

  /**
   * Whether the smooth scaling is applied.
   *
   * @type boolean
   * @name Bitmap#smooth
   */
  smooth: boolean;

  /**
   * The color of the text in CSS format.
   *
   * @type string
   */
  textColor: string;

  /**
   * The url of the image file.
   *
   * @readonly
   * @type string
   * @name Bitmap#url
   */
  readonly url: string;

  /**
   * The width of the bitmap.
   *
   * @readonly
   * @type number
   * @name Bitmap#width
   */
  readonly width: number;

  /**
   * Loads a image file.
   *
   * @param {string} url - The image url of the texture.
   * @returns {Bitmap} The new bitmap object.
   */
  load(url: string): Bitmap;

  /**
   * Takes a snapshot of the game screen.
   *
   * @param {Stage} stage - The stage object.
   * @returns {Bitmap} The new bitmap object.
   */
  snap(stage: Stage): Bitmap;

  /**
   * Adds a callback function that will be called when the bitmap is loaded.
   *
   * @param {function} listner - The callback function.
   */
  addLoadListener(listner: Function): void;

  /**
   * Performs a block transfer.
   *
   * @param {Bitmap} source - The bitmap to draw.
   * @param {number} sx - The x coordinate in the source.
   * @param {number} sy - The y coordinate in the source.
   * @param {number} sw - The width of the source image.
   * @param {number} sh - The height of the source image.
   * @param {number} dx - The x coordinate in the destination.
   * @param {number} dy - The y coordinate in the destination.
   * @param {number} [dw=sw] The width to draw the image in the destination.
   * @param {number} [dh=sh] The height to draw the image in the destination.
   */
  blt(
    source: Bitmap,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    dx: number,
    dy: number,
    dw: number,
    dh: number
  ): void;

  /**
   * Clears the entire bitmap.
   */
  clear(): void;

  /**
   * Clears the specified rectangle.
   *
   * @param {number} x - The x coordinate for the upper-left corner.
   * @param {number} y - The y coordinate for the upper-left corner.
   * @param {number} width - The width of the rectangle to clear.
   * @param {number} height - The height of the rectangle to clear.
   */
  clearRect(x: number, y: number, width: number, height: number): void;

  /**
   * Destroys the bitmap.
   */
  destroy(): void;

  /**
   * Draws a bitmap in the shape of a circle.
   *
   * @param {number} x - The x coordinate based on the circle center.
   * @param {number} y - The y coordinate based on the circle center.
   * @param {number} radius - The radius of the circle.
   * @param {string} color - The color of the circle in CSS format.
   */
  drawCircle(x: number, y: number, radius: number, color: number): void;

  /**
   * Draws the outline text to the bitmap.
   *
   * @param {string} text - The text that will be drawn.
   * @param {number} x - The x coordinate for the left of the text.
   * @param {number} y - The y coordinate for the top of the text.
   * @param {number} maxWidth - The maximum allowed width of the text.
   * @param {number} lineHeight - The height of the text line.
   * @param {string} align - The alignment of the text.
   */
  drawText(
    text: string,
    x: number,
    y: number,
    maxWidth: number,
    lineHeight: number,
    align: string
  ): void;

  /**
   * Fills the entire bitmap.
   *
   * @param {string} color - The color of the rectangle in CSS format.
   */
  fillAll(color: string): void;

  /**
   * Fills the specified rectangle.
   *
   * @param {number} x - The x coordinate for the upper-left corner.
   * @param {number} y - The y coordinate for the upper-left corner.
   * @param {number} width - The width of the rectangle to fill.
   * @param {number} height - The height of the rectangle to fill.
   * @param {string} color - The color of the rectangle in CSS format.
   */
  fillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  ): void;

  /**
   * Returns alpha pixel value at the specified point.
   *
   * @param {number} x - The x coordinate of the pixel in the bitmap.
   * @param {number} y - The y coordinate of the pixel in the bitmap.
   * @returns {string} The alpha value.
   */
  getAlphaPixel(x: number, y: number): string;

  /**
   * Returns pixel color at the specified point.
   *
   * @param {number} x - The x coordinate of the pixel in the bitmap.
   * @param {number} y - The y coordinate of the pixel in the bitmap.
   * @returns {string} The pixel color (hex format).
   */
  getPixel(x: number, y: number): string;

  /**
   * Draws the rectangle with a gradation.
   *
   * @param {number} x - The x coordinate for the upper-left corner.
   * @param {number} y - The y coordinate for the upper-left corner.
   * @param {number} width - The width of the rectangle to fill.
   * @param {number} height - The height of the rectangle to fill.
   * @param {string} color1 - The gradient starting color.
   * @param {string} color2 - The gradient ending color.
   * @param {boolean} vertical - Whether the gradient should be draw as vertical or not.
   */
  gradientFillRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color1: string,
    color2: string,
    vertical: boolean
  ): void;

  /**
   * Checks whether a loading error has occurred.
   *
   * @returns {boolean} True if a loading error has occurred.
   */
  isError(): boolean;

  /**
   * Checks whether the bitmap is ready to render.
   *
   * @returns {boolean} True if the bitmap is ready to render.
   */
  isReady(): boolean;

  /**
   * Returns the width of the specified text.
   *
   * @param {string} text - The text to be measured.
   * @returns {number} The width of the text in pixels.
   */
  measureTextWidth(text: string): number;

  /**
   * Resizes the bitmap.
   *
   * @param {number} width - The new width of the bitmap.
   * @param {number} height - The new height of the bitmap.
   */
  resize(width: number, height: number): void;

  /**
   * Tries to load the image again.
   */
  retry(): void;

  /**
   * Draws the specified rectangular frame.
   *
   * @param {number} x - The x coordinate for the upper-left corner.
   * @param {number} y - The y coordinate for the upper-left corner.
   * @param {number} width - The width of the rectangle to fill.
   * @param {number} height - The height of the rectangle to fill.
   * @param {string} color - The color of the rectangle in CSS format.
   */
  strokeRect(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  ): void;
}

export {Bitmap};
