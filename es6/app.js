(function () {

    document.addEventListener('DOMContentLoaded', function() {
        const core = new CoreModule();
        const templateModule = new TemplateModule(core);
    
        function loadTemplate(templateName, pushState = true) {
            templateModule.loadTemplate(templateName, 'main-content');
            if (pushState) {
                window.history.pushState({ template: templateName }, '', templateName + '.html');
            }
        }
    
        // function handlePopState(event) {
        //     if (event.state && event.state.template) {
        //         loadTemplate(event.state.template, false);
        //     } else {
        //         // Reset to initial index.html content
        //         document.getElementById('main-content').innerHTML = '<!-- Initial content here -->';
        //     }
        // }
    
        // window.onpopstate = handlePopState;
        window.onpopstate = function(event) {
            if (event.state && event.state.template) {
                loadTemplate(event.state.template, false);
            } else {
                loadTemplate('home', false);
            }
        };
    
        // Event listeners for navbar links

        document.getElementById('nav-home').addEventListener('click', function(e) {
            e.preventDefault();
            document.getElementById('main-content').innerHTML = '<!-- Place your original content here -->';
            window.history.pushState({}, '', 'home');
        });

        document.getElementById('nav-about').addEventListener('click', function(e) {
            e.preventDefault();
            loadTemplate('about');
        });

        document.getElementById('nav-contact').addEventListener('click', function(e) {
            e.preventDefault();
            loadTemplate('contact');
        });

        document.getElementById('nav-home').addEventListener('click', function(e) {
            e.preventDefault();
            loadTemplate('home');
        });
    
        // Initialize content based on current URL
        const path = window.location.pathname.split('/').pop();
        if (path && path !== 'index.html') {
            const templateName = path.replace('.html', '');
            loadTemplate(templateName, false);
        }
    
        // ... other event listeners ...
    });
    
    
/*
    document.addEventListener('DOMContentLoaded', function() {
        const core = new CoreModule();
        const templateModule = new TemplateModule(core);
    
        function loadTemplate(templateName) {
            templateModule.loadTemplate(templateName, 'main-content');
            window.history.pushState({}, '', templateName + '.html');
        }
    

        // Event listener for the "About" link
        document.getElementById('nav-about').addEventListener('click', function(e) {
            e.preventDefault();
            loadTemplate('about');
        });
    
        document.getElementById('nav-contact').addEventListener('click', function(e) {
            e.preventDefault();
            loadTemplate('contact');
        });
    
        // ... other event listeners ...
    });
*/
})();

