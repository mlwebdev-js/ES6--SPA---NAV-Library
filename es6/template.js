class TemplateModule {
    constructor(core) {
        this.core = core;
    }

    loadTemplate(templateName, targetElementId) {
        const templateUrl = `templates/${templateName}.html`;
        this.core.ajax(
            templateUrl,
            (responseText) => {
                document.getElementById(targetElementId).innerHTML = responseText;
            },
            (error) => {
                console.error('Error loading template:', error);
            }
        );
    }
}
