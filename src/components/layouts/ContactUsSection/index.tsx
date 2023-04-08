import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import contactImg from "../../../assets/photo10.jpg";
import "./ContactUsSection.css";

const newMessageFormSchema = z.object({
  email: z.string().email("Este e-mail não é válido."),
  description: z
    .string()
    .min(2, { message: "Escreva uma descrição que tenha pelo menos 2 letras" }),
  message: z
    .string()
    .min(2, { message: "Escreva algo com pelo menos 2 letrinhas" }),
});

type NewMessageFormInputs = z.infer<typeof newMessageFormSchema>;

export function ContactUsSection() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewMessageFormInputs>({
    resolver: zodResolver(newMessageFormSchema),
  });

  async function handleCreateMessageForm(data: NewMessageFormInputs) {
    const { email, description, message } = data;

    console.log("Passou na validação");
    console.log("Esse é o E-mail:", email);
    console.log("Essa é a Descrição:", description);
    console.log("Sua menssagem:", message);

    reset();
  }

  return (
    <div className="contactContainer">
      <div className="contactHeader">
        <h6>05.</h6>
        <u>Contato</u>
      </div>

      <div className="cols">
        <div className="colLeft">
          <img src={contactImg} alt="" />
        </div>

        <div className="colRight">
          <form onSubmit={handleSubmit(handleCreateMessageForm)}>
            <div>
              <label htmlFor="">E-mail:</label>
              <input
                type="text"
                placeholder="E-mail"
                required
                {...register("email")}
                className="input"
              />
            </div>

            <div>
              <label htmlFor="">Descrição:</label>
              <input
                type="text"
                placeholder="Descrição"
                required
                {...register("description")}
                className="input"
              />
            </div>

            <div>
              <textarea
                placeholder="Mensagem"
                required
                {...register("message")}
                className="input"
              />
            </div>

            <button type="submit" disabled={isSubmitting} className="btn btn1">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
