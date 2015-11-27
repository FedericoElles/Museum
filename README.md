# Museum

## UI Demo
http://federicoelles.github.io/Museum/

## Native App Interface

### index.html - Main View

App should send each second the current BLE Beacon state to the WebView:

        // two beacons with UUID and strength
        state.render([["UUID-123123", 400],["UUID-234234", 123]])
        
        // no beacons
        state.render([])
        
All http:// links from within the main view should be rendered in a second WebView including a back button 

### Detail View

Simple Webview featuring a native back button to return to Main View. Can have nice animation while switching views.
