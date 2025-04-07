# Sanity Studio Access

This project uses Sanity.io as its content management system (CMS). To access the content management interface:

1. Go to: `https://[your-project-id].sanity.studio`
   - Replace `[your-project-id]` with your actual Sanity project ID
   - You can find this in your `.env.local` file as `NEXT_PUBLIC_SANITY_PROJECT_ID`

2. Log in with your Sanity credentials

## Why Not Embedded Studio?

This project uses the hosted version of Sanity Studio instead of embedding it in the Next.js application because:
- It's more reliable and easier to maintain
- No build configuration issues
- Automatic updates from Sanity
- Better performance
- Simpler deployment process

## Content Management

Once logged in, you can:
- Create and edit content
- Manage media files
- Configure content schemas
- Collaborate with team members 