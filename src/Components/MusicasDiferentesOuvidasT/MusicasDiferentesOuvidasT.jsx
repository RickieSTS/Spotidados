// import { Card, CardContent, Typography } from '@mui/material';
// function MusicasDiferentesOuvidasT({dados}) {
// //G2) Ver quantas músicas diferentes já foram ouvidas no total.
//   const count = new Set(dados.map((e)=>(e.master_metadata_track_name)));
    
    
//   return(
//     <Card sx={{ 
//       bgcolor: '#666666', 
//       border: '2px solid #808080', 
//       borderRadius: '15px',
//       color: 'white',
//       minWidth: 200,
//       margin: 20
//      }}>
//        <CardContent>
//          <Typography variant="h6" gutterBottom>
//         Músicas Diferentes Ouvidas
//          </Typography>
//          <Typography variant="h5">
           
//            Plays:{count.size}
//          </Typography>
//        </CardContent>
//      </Card>
//    );
//   }

// export default MusicasDiferentesOuvidasT;
import { Card, CardContent, Typography } from '@mui/material';
import React, { useState, useCallback } from 'react';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';

function MusicasDiferentesOuvidasT({dados}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    // Sua lógica original para contar músicas únicas
    const count = new Set(dados.map((e) => e.master_metadata_track_name));

    // Preparar os slides com imagens diferentes para cada música
    const slides = React.useMemo(() => {
        const count = new Set(dados.map((e) => e.master_metadata_track_name));
        const musicasUnicas = Array.from(count)
            .slice(0, 12) // Pegar apenas as primeiras 12 músicas
            .map((nome, index) => {
                // Array com URLs diferentes para cada música
                const imagens = [
                    "https://images.ctfassets.net/lnhrh9gqejzl/3byxZVu9ZYq6oGwI9HtuNT/9214d4c6a5f8afd1b567406ef4513f46/Tokischa_v1.jpg?w=1600",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4ZRHQLAfMdejv8uB7BPoXegl3DaxrsSfHfSZwuzZle_p6hjTRhENArYwrn3EHeEhQq74&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzftOqBqmFKq8uPEHUbh585AK7iBYwZQg_DxZm67sotnKSTJZ8kbZwKwsW_yvhm1mlM8&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1YYdSmRjO5xg68UDFZcH4BKlXTQ90EeA7DYP8Thp1QRs6pBtVAxdP1jEP2pDeHkWu9uI&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2ZDHfLLA5KYOc3og7vjMdyJROD5_fqm3_HQq_21b6R3msYc2ID05bDFWyIkMbQyBLi7k&usqp=CAU",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG-h1WTa6WLKUIKpRHXawngMj965o-8fC7y9HGQKkx4N7ocBuQY4hIH16SETqeSPQcOkM&usqp=CAU",
                    "https://images.ctfassets.net/lnhrh9gqejzl/3byxZVu9ZYq6oGwI9HtuNT/9214d4c6a5f8afd1b567406ef4513f46/Tokischa_v1.jpg?w=1600",
                    "https://images.ctfassets.net/lnhrh9gqejzl/3byxZVu9ZYq6oGwI9HtuNT/9214d4c6a5f8afd1b567406ef4513f46/Tokischa_v1.jpg?w=1600",
                    "https://images.ctfassets.net/lnhrh9gqejzl/3byxZVu9ZYq6oGwI9HtuNT/9214d4c6a5f8afd1b567406ef4513f46/Tokischa_v1.jpg?w=1600",
                    "https://images.ctfassets.net/lnhrh9gqejzl/3byxZVu9ZYq6oGwI9HtuNT/9214d4c6a5f8afd1b567406ef4513f46/Tokischa_v1.jpg?w=1600",
                    "https://images.ctfassets.net/lnhrh9gqejzl/3byxZVu9ZYq6oGwI9HtuNT/9214d4c6a5f8afd1b567406ef4513f46/Tokischa_v1.jpg?w=1600",
                    "https://images.ctfassets.net/lnhrh9gqejzl/3byxZVu9ZYq6oGwI9HtuNT/9214d4c6a5f8afd1b567406ef4513f46/Tokischa_v1.jpg?w=1600"
                ];

                return {
                    nome: nome,
                    imagem: imagens[index] || imagens[0] // Usa a primeira imagem como fallback
                };
            });

        const slidesArray = [];
        // Criar exatamente 4 grupos de 3 músicas
        for (let i = 0; i < 12; i += 3) {
            slidesArray.push(musicasUnicas.slice(i, i + 3));
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
                    Músicas Diferentes Ouvidas
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
                            {slides[currentIndex].map((musica, index) => (
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
                                        {musica.nome}
                                    </p>
                                    <img
                                        src={musica.imagem}
                                        alt={musica.nome}
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

export default MusicasDiferentesOuvidasT;