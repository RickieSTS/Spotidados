// import { Card, CardContent, Typography } from '@mui/material';
// function ArtistasDiferentesOuvidosT({dados}) {
//     //G3) Ver quantos artistas diferentes já foram ouvidos no total.
//       const count = new Set(dados.map((e)=>(e.master_metadata_album_artist_name)));
        
        
//       return (
//           <Card sx={{ 
//             bgcolor: '#666666', 
//             border: '2px solid #808080', 
//             borderRadius: '15px',
//             color: 'white',
//             minWidth: 200,
//             margin: 20
//            }}>
//              <CardContent>
//                <Typography variant="h6" gutterBottom>
//               Diferentes Artistas Ouvidos
//                </Typography>
//                <Typography variant="h5">
                 
//                  Plays:{count.size}
//                </Typography>
//              </CardContent>
//            </Card>
//          );
//         }

//     export default ArtistasDiferentesOuvidosT;
import { Card, CardContent, Typography } from '@mui/material';
import React, { useState, useCallback } from 'react';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

function ArtistasDiferentesOuvidosT({ dados }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Lógica para contar artistas únicos
    const count = new Set(dados.map((e) => e.master_metadata_album_artist_name));

    // Preparar os slides com imagens diferentes para cada artista
    const slides = React.useMemo(() => {
      const count = new Set(dados.map((e) => e.master_metadata_album_artist_name));
        const artistasUnicos = Array.from(count)
            .slice(0, 12) // Pegar apenas os primeiros 12 artistas
            .map((nome, index) => {
                // Array com URLs diferentes para cada artista
                const imagens = [
                    "https://via.placeholder.com/150?text=Artista+1",
                    "https://via.placeholder.com/150?text=Artista+2",
                    "https://via.placeholder.com/150?text=Artista+3",
                    "https://via.placeholder.com/150?text=Artista+4",
                    "https://via.placeholder.com/150?text=Artista+5",
                    "https://via.placeholder.com/150?text=Artista+6",
                    "https://via.placeholder.com/150?text=Artista+7",
                    "https://via.placeholder.com/150?text=Artista+8",
                    "https://via.placeholder.com/150?text=Artista+9",
                    "https://via.placeholder.com/150?text=Artista+10",
                    "https://via.placeholder.com/150?text=Artista+11",
                    "https://via.placeholder.com/150?text=Artista+12"
                ];

                return {
                    nome: nome,
                    imagem: imagens[index] || imagens[0] // Usa a primeira imagem como fallback
                };
            });

        const slidesArray = [];
        // Criar exatamente 4 grupos de 3 artistas
        for (let i = 0; i < 12; i += 3) {
            slidesArray.push(artistasUnicos.slice(i, i + 3));
        }
        return slidesArray;
    }, [dados]);

    const nextSlide = useCallback(() => {
        setCurrentIndex(current => current === 3 ? 0 : current + 1); // Loop após 4º grupo
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex(current => current === 0 ? 3 : current - 1); // Volta para o 4º grupo
    }, []);

    React.useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    return (
        <Card sx={{
            bgcolor: '#666666',
            border: '2px solid #808080',
            borderRadius: '15px',
            color: 'white',
            margin: '20px',
            height: '280px'
        }}>
            <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                    Artistas Diferentes Ouvidos
                </Typography>
                <Typography variant="h5" align="center" gutterBottom>
                    Plays: {count.size}
                </Typography>

                <div style={{
                    position: 'relative',
                    height: '160px',
                    marginTop: '10px',
                    overflow: 'hidden'
                }}>
                    {slides.length > 0 && (
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: '0 40px'
                        }}>
                            {slides[currentIndex].map((artista, index) => (
                                <div key={index} style={{
                                    width: '30%',
                                    backgroundColor: '#444444',
                                    borderRadius: '8px',
                                    padding: '8px',
                                    textAlign: 'center'
                                }}>
                                    <p style={{
                                        margin: '0 0 8px 0',
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        whiteSpace: 'nowrap',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis'
                                    }}>
                                        {artista.nome}
                                    </p>
                                    <img
                                        src={artista.imagem}
                                        alt={artista.nome}
                                        style={{
                                            width: '100%',
                                            height: '100px',
                                            objectFit: 'cover',
                                            borderRadius: '4px'
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    <button
                        onClick={prevSlide}
                        style={{
                            position: 'absolute',
                            left: '5px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: '#5B21B6',
                            border: 'none',
                            borderRadius: '50%',
                            padding: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        <NavigateBefore style={{ color: 'white' }} />
                    </button>
                    <button
                        onClick={nextSlide}
                        style={{
                            position: 'absolute',
                            right: '5px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: '#5B21B6',
                            border: 'none',
                            borderRadius: '50%',
                            padding: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        <NavigateNext style={{ color: 'white' }} />
                    </button>
                </div>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '8px',
                    marginTop: '8px'
                }}>
                    {[0, 1, 2, 3].map((index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            style={{
                                width: '8px',
                                height: '8px',
                                borderRadius: '50%',
                                backgroundColor: index === currentIndex ? 'white' : 'rgba(255,255,255,0.5)',
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer'
                            }}
                        />
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

export default ArtistasDiferentesOuvidosT;