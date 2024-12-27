function G3({dados}) {
    //G3) Ver quantos artistas diferentes já foram ouvidos no total.
      const count = new Set(dados.map((e)=>(e.master_metadata_album_artist_name)));
        
        
      return <>
    
      {count.size}
    
      
      </>;
    }
    export default G3;