(function($) {
    $(function() {
        // Se um link tiver um menu suspenso, adicione alternador de submenu.
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            // Feche um menu suspenso ao selecionar outro
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        // Clicar fora do menu suspenso removerá a classe suspensa
        $('html').click(function() {
            $('.nav-dropdown').hide();
        });
        // Alterna para abrir e fechar estilos de navegação ao clicar
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        // Alternar menu para X
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
    });
})(jQuery);