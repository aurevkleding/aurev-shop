# To-Do List Application

A modern, feature-rich to-do list application with local storage functionality. Stay organized and productive!

## Features

### ✨ Core Features
- **Add Tasks**: Quickly add new tasks with a simple input
- **Mark Complete**: Check off completed tasks
- **Edit Tasks**: Update task description and priority anytime
- **Delete Tasks**: Remove individual tasks
- **Priority Levels**: Set tasks as High, Medium, or Low priority
- **Task Timestamps**: Each task shows the date it was created

### 💾 Local Storage
- **Persistent Storage**: All tasks are saved to browser's local storage
- **Auto-Save**: Tasks are automatically saved after any action
- **Data Persistence**: Your tasks survive browser restarts

### 🎯 Filter & View Options
- **All Tasks**: View every task in your list
- **Pending**: Show only incomplete tasks
- **Completed**: View finished tasks
- **High Priority**: Filter to show only high-priority items

### 📊 Statistics
- **Total Tasks**: Count of all tasks
- **Completed**: Number of finished tasks
- **Pending**: Number of incomplete tasks

### 🛠️ Management Tools
- **Clear Completed**: Remove all finished tasks at once
- **Clear All**: Delete all tasks (with confirmation)
- **Search/Filter**: Organize tasks by status and priority

### 📱 Responsive Design
- Works perfectly on desktop, tablet, and mobile
- Touch-friendly interface
- Optimized for all screen sizes

## Project Structure

```
todo-app/
├── index.html       # Main HTML file
├── styles.css       # Complete styling
├── script.js        # Application logic
└── README.md        # This file
```

## How to Use

### Adding a Task
1. Type your task in the input field
2. Select a priority level (Low, Medium, or High)
3. Click "Add Task" or press Enter

### Completing a Task
- Click the checkbox next to a task to mark it as complete
- Completed tasks appear grayed out with strikethrough text

### Editing a Task
1. Click the edit button (pencil icon) on any task
2. Update the task description and priority
3. Click "Save Changes"

### Deleting a Task
- Click the delete button (trash icon) on any task
- Confirm the deletion when prompted

### Filtering Tasks
- Use the filter buttons to view different task categories
- Filters: All, Pending, Completed, High Priority

### Clearing Tasks
- **Clear Completed**: Removes all finished tasks
- **Clear All**: Removes all tasks (use with caution!)

## Technology Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with gradients and flexbox/grid
- **Vanilla JavaScript**: Pure JS, no frameworks
- **Font Awesome**: Icons

### Storage
- **Local Storage API**: Browser-based persistent storage
- **JSON**: Data serialization format

## Customization

### Change Color Scheme
Edit the gradient colors in `styles.css`:
```css
/* Primary gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Change to your colors */
background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
```

### Modify Priority Colors
Find the priority color definitions in `styles.css`:
```css
.task-priority.high {
    background: #ff6b6b;  /* Red */
}

.task-priority.medium {
    background: #ffd93d;  /* Yellow */
}

.task-priority.low {
    background: #6bcf7f;  /* Green */
}
```

### Adjust Font
Change the font family in `styles.css`:
```css
font-family: 'Your Font Name', sans-serif;
```

## Browser Support

✅ Chrome (latest)
✅ Firefox (latest)
✅ Safari (latest)
✅ Edge (latest)
✅ Mobile browsers

## Local Storage Details

### What's Stored
- Task ID (timestamp)
- Task description text
- Completion status
- Priority level
- Creation date

### Storage Key
- Key: `todoTasks`
- Format: JSON array
- Max size: ~5-10MB (browser dependent)

### Viewing Stored Data
Open browser DevTools:
1. Press F12 or Right-click → Inspect
2. Go to Application tab
3. Navigate to Local Storage
4. Find the entry for your domain
5. Look for `todoTasks` key

## Tips & Tricks

### Keyboard Shortcuts
- **Enter**: Add task when in input field
- **Escape**: Close edit modal

### Best Practices
- Set high priority for urgent tasks
- Clear completed tasks regularly to keep list clean
- Use specific, actionable task descriptions
- Review your list daily

## Advanced Features You Can Add

- **Due Dates**: Add date picker for task deadlines
- **Categories**: Organize tasks by category
- **Search**: Full-text search functionality
- **Recurring Tasks**: Automatically repeat certain tasks
- **Export/Import**: Save tasks as JSON file
- **Dark Mode**: Toggle dark/light theme
- **Notifications**: Browser notifications for due tasks
- **Sorting**: Sort by date, priority, or custom order
- **Tags**: Label tasks with multiple tags
- **Cloud Sync**: Sync across devices via backend

## Troubleshooting

### Tasks Not Saving
- Check if local storage is enabled in browser
- Clear browser cache and reload
- Check browser console for errors (F12)

### Tasks Disappeared
- Check if you cleared browser data
- Check local storage (see Browser DevTools above)
- Note: Private/Incognito browsing clears data on close

### Modal Not Opening
- Check browser console for JavaScript errors
- Ensure JavaScript is enabled
- Try refreshing the page

## Performance

- **Fast**: Pure vanilla JavaScript, no framework overhead
- **Lightweight**: ~50KB total (HTML + CSS + JS)
- **Efficient**: Optimized DOM rendering
- **Responsive**: Under 100ms for typical operations

## Security Notes

- **Local Storage Only**: No data sent to servers
- **Client-Side Processing**: All logic runs in browser
- **HTML Escaping**: Prevents XSS attacks
- **No External Dependencies**: Except Font Awesome CDN

## License

Free to use and modify for personal or commercial projects.

## Getting Started

1. **Download Files**: Get index.html, styles.css, and script.js
2. **Create Folder**: Create a directory for your app
3. **Open in Browser**: Double-click index.html or use live server
4. **Start Using**: Add your first task!

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload the three files
3. Go to Settings → Pages
4. Select main branch as source
5. Your app is live!

### Netlify
1. Drag and drop your files
2. App is instantly deployed
3. Get a live URL

### Any Web Host
1. Upload files via FTP
2. Access via your domain
3. Works immediately

---

**Version**: 1.0
**Last Updated**: May 27, 2026

Made with ❤️ for productivity lovers everywhere! 📋✨