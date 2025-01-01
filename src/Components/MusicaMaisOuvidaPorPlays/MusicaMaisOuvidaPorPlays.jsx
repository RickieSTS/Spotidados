
import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

function MusicaMaisOuvidaPorPlays({ dados }) {
    // G5) Ver a música mais ouvida (por plays) e quantas vezes foi ouvida.
    const musicaMaisOuvida = React.useMemo(() => {
        const contagem = {};

        // Contabilizar as ocorrências de cada música
        dados.forEach((e) => {
            const musica = e.master_metadata_track_name;
            if (musica) {
                contagem[musica] = (contagem[musica] || 0) + 1;
            }
        });

        // Encontrar a música mais ouvida
        let maisOuvida = { nome: null, plays: 0 };
        for (const [musica, plays] of Object.entries(contagem)) {
            if (plays > maisOuvida.plays) {
                maisOuvida = { nome: musica, plays };
            }
        }

        return maisOuvida;
    }, [dados]);

    return (
        <Card variant='verdeMusga'>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    Música Mais Ouvida
                </Typography>
                {musicaMaisOuvida.nome ? (
                    <>
                        <Typography variant="h5">
                            {musicaMaisOuvida.nome}
                        </Typography>
                        <Typography variant="body1">
                            Plays: {musicaMaisOuvida.plays}
                        </Typography>
                    </>
                ) : (
                    <Typography variant="body1">
                        Nenhuma música encontrada.
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
}

export default MusicaMaisOuvidaPorPlays;