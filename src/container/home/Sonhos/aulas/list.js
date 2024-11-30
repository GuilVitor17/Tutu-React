import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';

function ListAulas({ titulo, aula }) {
  const token = localStorage.getItem('token');

  // Função para extrair o ID do vídeo da URL do YouTube
  const getYouTubeEmbedUrl = (url) => {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/([a-zA-Z0-9_-]{11}))(?:[^\n\s]+)?|youtu\.be\/([a-zA-Z0-9_-]{11}))?/;
    const match = url.match(regExp);
    const videoId = match && (match[1] || match[2]);
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  // Converte a URL de aula para o formato de embed
  const videoUrl = getYouTubeEmbedUrl(aula);

  return (
    <>
      <Accordion.Item>
        <Accordion.Header>{titulo}</Accordion.Header>
        <Accordion.Body>
          {videoUrl ? (
            <iframe
              src={videoUrl}
              width="100%"
              height="250"
              title={titulo}
              style={{right:"15px", position:"relative"}}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <p>URL inválida ou não suportada.</p>
          )}
        </Accordion.Body>
      </Accordion.Item>
    </>
  );
}

export default ListAulas;
