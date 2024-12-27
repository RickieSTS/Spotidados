function MusicasDiferentesOuvidasT({dados}) {
//G2) Ver quantas músicas diferentes já foram ouvidas no total.
  const count = new Set(dados.map((e)=>(e.master_metadata_track_name)));
    
    
  return <>

  {count.size}

  
  </>;
}
export default MusicasDiferentesOuvidasT;