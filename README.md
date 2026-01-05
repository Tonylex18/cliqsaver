# Cliqsaver Landing Pages

Marketing site for Cliqsaver, a savings and credit-building app. The project includes the main product page, a how-it-works guide, and FAQs with download calls-to-action.

## What's inside
- `index.html`: core landing page with hero CTA, features, testimonials carousel, and download buttons.
- `guideline.html`: four-step walkthrough for registering, saving, building credit, and budgeting.
- `faqs.html`: accordion with common questions; states handled in `js/script.js`.
- `css/main.css` and `scss/*.scss`: custom styles layered on Bootstrap 5, Font Awesome, and AOS animations.
- `js/script.js`: sticky navbar handling, nav highlighting, carousel rotation controls, and FAQ accordion state.
- `images/`: hero/phone artwork, icons, and UI accents used across pages.

## Key product messaging
- Pool savings with friends or colleagues, access low/zero-interest credit, and improve credit scores through reported activity.
- Expense management tools with budgeting and reminders.
- Download CTAs for iOS and Android, testimonial slider, and footer/community links for getting started.

## Customizing
- Edit copy directly in the HTML files; CTA links are placeholders you can wire to real targets.
- Tweak styling in `css/main.css` or adjust the SCSS sources in `scss/` then recompile with your preferred SASS tool.
- Update carousel or FAQ items in their respective HTML sections; behaviors are already wired in `js/script.js`.

## Dependencies
No build step is required. Bootstrap, AOS, and Font Awesome load from CDNs, and all other assets live in the repo.
