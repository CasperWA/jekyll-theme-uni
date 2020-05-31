# Uni – A one-page Jekyll theme

This theme is forked from [brianmaierjr](https://github.com/brianmaierjr/uni/).

## Updates

It has been adapted with:

- Using only the full page layout
- The possibility of having circular buttons
- Using [font-awesome](https://fontawesome.com/) logos/icons
- Rearranging the text position to quadrants of the site (only `upper` has been introduced so far)
- Using the [Montserrat](https://fonts.google.com/specimen/Montserrat) font by Google
- For the right position, the text is left-aligned with the center of the page

The gulpfile has been updated to support [gulp v4](https://gulpjs.com/).

## Setup

1. [Install Jekyll](http://jekyllrb.com)
2. [Install Bundler](http://bundler.io/)
3. Run `bundle install`
4. Install gulp dependencies by running `npm install`
5. Run Jekyll and watch files by running `bundle exec gulp`

## Site/Layout Settings

The main settings can be found inside the [`_config.yml`](_config.yml) file:

- **title**: you or your company's name
- **description**: description of your site that will be used when your site is shared or posted on social media
- **social**: social media usernames (optional)
  Email can be added here, as well as other desired buttons
  - **platform**: font-awesome icon and css class identifier
  - **url**: destination for the link
  - **name**: text shown for screen readers
- **url**: your url
- **baseurl**: uri for the base of your site (if not equal to the url)
- **sharing_image**: name of your image.
  This image should be placed in the [`assets/img/`](assets/img/) folder
- **google_analytics**: Google Analytics key (optional)
- **full_text_position:** where on the page the text will appear (`left`, `center`, `right`).
  This can be modified by adding `upper`, e.g., `right upper`.

## Further Customizations

### Styling

While running `bundle exec gulp` modify any of the files in the [`_scss/`](_scss/) folder and your browser will update automatically.
No reload required!

The layouts all have their own stylesheets found in [`_scss/layouts/`](_scss/layouts/).

#### Color scheme

The set of colors for the color scheme used for headings, accents, and buttons can be changed by modifying the [`_scss/base/_config.scss`](_scss/base/_config.scss) file.

### Add Content

Add content in [`_config.yml`](_config.yml) or [`index.html`](index.html).

### Imagery

The theme is setup to use responsive images that require three different image sizes.
This allows the browser to serve the appropriate image based on the screen size.
Recommended image widths are:

- *Small*: 768px wide
- *Medium*: 1200px wide
- *Large*: 1600px wide

To replace the images, modify the names in the `responsivebackground` mixin as shown below in the scss file found under [`_scss/layouts/`](_scss/layouts/).
*Make sure to include the file extension!*

```scss
@include responsivebackground("small.jpg", "medium.jpg", "large.jpg");
```

When uploading images please keep file size in mind.
For optimizing, one could use [TinyPNG](https://tinypng.com) and [TinyJPG](https://tinyjpg.com).

### Favicon

To add your own favicon, replace the image found at `assets/img/favicon.png`.
