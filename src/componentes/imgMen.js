function imgHomem() {
    return (
        <img src="../../public/assets/imgMen.png" alt="Um homem sorrindo enquanto segura uma caixa de papelão"/>
    );
  }
  


const imgMen = ({ src, alt, className }) => {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
      />
    );
  };

export default imgMen;