import { useEffect } from "react"

export const AdminCustomStyles = () => {
  useEffect(() => {
    // Inject custom CSS to hide unwanted elements
    const style = document.createElement('style')
    style.textContent = `
      /* Hide Documentation and Changelog menu items */
      [role="menuitem"]:has(a[href*="docs.medusajs.com"]),
      [role="menuitem"]:has(a[href*="github.com/medusajs/medusa/releases"]),
      a[href*="docs.medusajs.com"],
      a[href*="github.com/medusajs/medusa/releases"],
      li:has(a[href*="docs.medusajs.com"]),
      li:has(a[href*="github.com/medusajs/medusa/releases"]) {
        display: none !important;
      }

      /* Hide menu items by text content */
      [role="menuitem"]:has-text("Documentation"),
      [role="menuitem"]:has-text("Changelog"),
      li:has-text("Documentation"),
      li:has-text("Changelog") {
        display: none !important;
      }

      /* More aggressive hiding based on common patterns */
      [data-testid*="documentation"],
      [data-testid*="changelog"],
      [id*="documentation"],
      [id*="changelog"],
      [class*="documentation"],
      [class*="changelog"] {
        display: none !important;
      }

      /* Sign-in page animations */
      @keyframes fadeSlideIn {
        to {
          opacity: 1;
          filter: blur(0px);
          transform: translateY(0px);
        }
      }

      @keyframes slideRightIn {
        to {
          opacity: 1;
          filter: blur(0px);
          transform: translateX(0px);
        }
      }

      @keyframes testimonialIn {
        to {
          opacity: 1;
          filter: blur(0px);
          transform: translateY(0px) scale(1);
        }
      }

      .animate-element {
        opacity: 0;
        filter: blur(4px);
        transform: translateY(20px);
        animation: fadeSlideIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }

      .animate-slide-right {
        opacity: 0;
        filter: blur(4px);
        transform: translateX(40px);
        animation: slideRightIn 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }

      .animate-testimonial {
        opacity: 0;
        filter: blur(4px);
        transform: translateY(20px) scale(0.95);
        animation: testimonialIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
      }

      .animate-delay-100 { animation-delay: 0.1s; }
      .animate-delay-200 { animation-delay: 0.2s; }
      .animate-delay-300 { animation-delay: 0.3s; }
      .animate-delay-400 { animation-delay: 0.4s; }
      .animate-delay-500 { animation-delay: 0.5s; }
      .animate-delay-600 { animation-delay: 0.6s; }
      .animate-delay-700 { animation-delay: 0.7s; }
      .animate-delay-800 { animation-delay: 0.8s; }
      .animate-delay-900 { animation-delay: 0.9s; }
      .animate-delay-1000 { animation-delay: 1s; }
      .animate-delay-1200 { animation-delay: 1.2s; }
      .animate-delay-1400 { animation-delay: 1.4s; }

      /* Custom checkbox styles */
      .custom-checkbox {
        width: 1rem;
        height: 1rem;
        border-radius: 0.25rem;
        border: 1px solid rgb(209 213 219);
        color: rgb(124 58 237);
      }
      
      .custom-checkbox:focus {
        ring-color: rgb(139 92 246);
      }
    `
    document.head.appendChild(style)

    // JavaScript-based hiding as fallback
    const hideMenuItems = () => {
      // Find and hide by href
      const docLinks = document.querySelectorAll('a[href*="docs.medusajs.com"], a[href*="github.com/medusajs/medusa/releases"]')
      docLinks.forEach(link => {
        // Hide the link itself
        ;(link as HTMLElement).style.display = 'none'
        
        // Hide parent menu items
        const menuItem = link.closest('[role="menuitem"]') || link.closest('li') || link.closest('div')
        if (menuItem) {
          ;(menuItem as HTMLElement).style.display = 'none'
        }
      })

      // Find and hide by text content
      const allElements = document.querySelectorAll('*')
      allElements.forEach(element => {
        const text = element.textContent?.trim().toLowerCase()
        if (text === 'documentation' || text === 'changelog') {
          const menuItem = element.closest('[role="menuitem"]') || element.closest('li') || element
          ;(menuItem as HTMLElement).style.display = 'none'
        }
      })

      // Replace "Welcome to Medusa" text
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        null,
        false
      )

      const textNodes: Text[] = []
      let node: Node | null
      
      while ((node = walker.nextNode())) {
        if (node.textContent?.includes("Welcome to Medusa")) {
          textNodes.push(node as Text)
        }
      }

      textNodes.forEach((textNode) => {
        if (textNode.textContent) {
          textNode.textContent = textNode.textContent.replace(
            "Welcome to Medusa",
            "Welcome to myBoxNCase"
          )
        }
      })
    }

    // Run immediately
    hideMenuItems()

    // Run after a delay to catch dynamically loaded content
    setTimeout(hideMenuItems, 1000)
    setTimeout(hideMenuItems, 3000)
    setTimeout(hideMenuItems, 5000)

    // Set up mutation observer for dynamic content
    const observer = new MutationObserver(() => {
      hideMenuItems()
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    })

    // Cleanup
    return () => {
      observer.disconnect()
      if (style.parentNode) {
        style.parentNode.removeChild(style)
      }
    }
  }, [])

  return null
}

export default AdminCustomStyles