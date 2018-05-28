# musicmaster
Desafio Music Master do treinamento de react gcom

Fazer uma app React que consulta um artista na api de um serviço de música, traz o match exato contendo nome, quantidade de fans, uma lista das músicas mais tocadas (com foto do album), e um botão de play / pause em cada música (para ouvir um preview dela).

**Api do Deezer**: https://developers.deezer.com/api/search (_Foi utilizado esta api_)
**Api do Spotify**: https://beta.developer.spotify.com/documentation/web-api/reference/search/search/

**Dica para CORS**: https://cors-anywhere.herokuapp.com

Exemplo de chamada:
```
curl https://api.deezer.com/search/artist?q=artist:%22iron%20maiden%22 | python -m json.tool
```

_Áudio no JS_:
```
const audio = new Audio(previewUrl);
audio.play();
audio.pause();
```

Colocar Bootstrap 3 no HTML:
```
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
```

Para o formulário:
-> https://reactjs.org/docs/forms.html

Mas utilizei a biblioteca _react-bootstrap_.