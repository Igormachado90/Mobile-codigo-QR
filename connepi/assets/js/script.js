document.addEventListener('DOMContentLoaded', function() {
    
    const Botao = document.querySelectorAll('.botao');

    Botao.forEach(button => {
        button.addEventListener('click', function() {
            // Encontra o vídeo na mesma div que o botão
            const video = this.nextElementSibling;

            if (video.style.display === "none" || !video.style.display) {
                // Mostra vídeo se estiver escondido
                video.style.display = "block";
            } else {
                // Esconde vídeo se estiver visível
                video.style.display = "none";
            }
        });
    });
});
