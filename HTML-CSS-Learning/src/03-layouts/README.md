# Layouts

This folder contains examples of CSS layouts using Flexbox and Grid.

- `flexbox.html`: Flexbox layout example.
- `grid.html`: Grid layout example.
- `styles.css`: CSS for layouts.

# Overview of Layout Techniques in CSS

This document provides an overview of the layout techniques available in CSS, focusing on two powerful layout models: **Flexbox** and **CSS Grid**. Understanding these models is essential for creating responsive and well-structured web layouts.

## Flexbox

Flexbox, or the Flexible Box Layout, is a one-dimensional layout model that allows you to design complex layouts with ease. It provides a more efficient way to lay out, align, and distribute space among items in a container, even when their size is unknown or dynamic.

### Key Properties of Flexbox:
- **display: flex;**: This property enables the flex context for all its direct children.
- **flex-direction**: Defines the direction flex items are placed in the flex container (row, row-reverse, column, column-reverse).
- **justify-content**: Aligns flex items along the main axis (flex-start, flex-end, center, space-between, space-around).
- **align-items**: Aligns flex items along the cross axis (flex-start, flex-end, center, baseline, stretch).
- **flex-wrap**: Controls whether flex items should wrap onto multiple lines.

### Use Cases:
- Centering elements vertically and horizontally.
- Creating responsive navigation bars.
- Building card layouts.

## CSS Grid

CSS Grid Layout is a two-dimensional layout system that allows you to create complex layouts with rows and columns. It provides more control over the placement of items in a grid format.

### Key Properties of CSS Grid:
- **display: grid;**: This property enables the grid context for all its direct children.
- **grid-template-columns**: Defines the number and size of columns in the grid.
- **grid-template-rows**: Defines the number and size of rows in the grid.
- **grid-area**: Allows you to specify where an item should be placed in the grid.
- **gap**: Defines the space between rows and columns.

### Use Cases:
- Creating complex web layouts with overlapping elements.
- Designing responsive layouts that adapt to different screen sizes.
- Building dashboard interfaces with multiple components.

## Conclusion

Both Flexbox and CSS Grid are essential tools for modern web design. Flexbox is ideal for one-dimensional layouts, while CSS Grid excels in two-dimensional layouts. Understanding when to use each model will greatly enhance your ability to create responsive and visually appealing web pages.