# Urban Innovation Website & CMS - Quick Start Guide

## Public Website Access
Visit the main site at the root URL (/) to see your beautiful interior design portfolio website.

### Website Features:
- **Header/Navigation** - Links to all sections and Admin Portal button
- **Hero Section** - Eye-catching introduction with call-to-action
- **Portfolio** - Showcase of design projects with category filtering
  - View projects by category (All, Residential, Commercial, Mixed-Use)
  - Each project displays image, description, location, and completion date
- **Services** - Highlights of your design services
  - Residential Design, Commercial Spaces, Color & Materials, Lighting Design
- **Contact Section** - Get in touch with business information and contact form
- **Footer** - Company info, quick links, and social media

## Admin Portal Access

### Login Page
Navigate to `/admin` to access the admin portal.

**Demo Credentials:**
- **Username:** admin (any username works)
- **Password:** admin123

### Admin Dashboard Features

#### 1. Projects Tab
Manage your portfolio projects:
- **Add New Project** - Click "Add Project" button
  - Enter title, category, description, location, and completion date
  - Upload project image (converts to base64 for storage)
  - Save to immediately appear on public portfolio
  
- **Edit Project** - Click the edit icon on any project
  - Modify all project details
  - Update or change project image
  - Save changes instantly
  
- **Delete Project** - Click the trash icon to remove a project
  - Deleted projects are immediately removed from public site

#### 2. Site Content Tab
Edit company-wide content:
- **Company Name** - Your business name (appears in header and footer)
- **Tagline** - Short description of your company
- **About** - Detailed company description
- **Email** - Contact email address
- **Phone** - Phone number for inquiries
- **Address** - Physical office address

All changes save immediately and update across the website.

## How It Works

### Data Storage
- All data is stored in browser's localStorage
- Changes persist across browser sessions
- No backend server needed
- Images are converted to base64 and stored locally

### Real-Time Updates
- Any changes in the admin portal immediately appear on the public website
- No page refresh needed for content changes
- Portfolio updates appear instantly in the gallery

## Customization Tips

1. **Add More Project Categories** - Edit projects to add new categories
2. **Update Business Info** - Use Site Content tab to keep details current
3. **Upload High-Quality Images** - Projects with better images look more professional
4. **Keep Portfolio Updated** - Regular project updates improve SEO and user engagement

## Security Note
This is a demo CMS with a simple password. For production use:
- Implement proper authentication system
- Use a real database backend
- Add user management features
- Enable HTTPS
- Consider role-based access control

Enjoy your Urban Innovation portfolio!
