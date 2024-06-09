import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

function CadastrarEncomendas() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    nomeDestinatario: "",
    blocoDestinatario: "",
    numeroApartamento: "",
    tipoEntrega: "",
    dataRecebimento: "",
    dataEntrega: "",
  });

  useEffect(() => {
    const today = new Date();
    const brDate = new Date(
      today.toLocaleString("en-US", { timeZone: "America/Sao_Paulo" })
    );
    const formattedDate = `${String(brDate.getDate()).padStart(
      2,
      "0"
    )}/${String(brDate.getMonth() + 1).padStart(
      2,
      "0"
    )}/${brDate.getFullYear()}`;
    setFormData((prevData) => ({
      ...prevData,
      dataRecebimento: formattedDate,
    }));
  }, []);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="mb-3">
        <h3>Cadastrar Encomenda</h3>
      </div>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Col className="mb-4">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom01"
            className="mb-2"
          >
            <Form.Label className="form-label-sm">
              Nome do Destinatário
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite o nome do destinatário"
              name="nomeDestinatario"
              value={formData.nomeDestinatario}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom02"
            className="mb-2"
          >
            <Form.Label className="form-label-sm">
              Bloco do Destinatário
            </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Digite o bloco do destinatário"
              name="blocoDestinatario"
              value={formData.blocoDestinatario}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom03"
            className="mb-2"
          >
            <Form.Label className="form-label-sm">
              Número do Apartamento
            </Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Digite o número do apartamento"
              name="numeroApartamento"
              value={formData.numeroApartamento}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom04"
            className="mb-2"
          >
            <Form.Label className="form-label-sm">Tipo de Entrega</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o Tipo de Entrega"
              name="tipoEntrega"
              value={formData.tipoEntrega}
              onChange={handleChange}
              required
            />
            <Form.Control.Feedback type="invalid">
              Forneça um tipo de entrega válido.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom05"
            className="mb-2"
          >
            <Form.Label className="form-label-sm">
              Data de Recebimento
            </Form.Label>
            <Form.Control
              required
              type="text"
              name="dataRecebimento"
              value={formData.dataRecebimento}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationCustom06"
            className="mb-2"
          >
            <Form.Label className="form-label-sm">
              Data de entrega ao destinatário
            </Form.Label>
            <Form.Control
              required
              type="date"
              name="dataEntrega"
              value={formData.dataEntrega}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Button type="submit">Cadastrar Encomenda</Button>
      </Form>
    </>
  );
}

export default CadastrarEncomendas;
