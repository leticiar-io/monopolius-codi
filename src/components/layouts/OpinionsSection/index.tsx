import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import ideaImg from "../../../assets/photo9.jpg";
import "./OpinionsSection.css";

const newOpinionFormSchema = z.object({
  email: z.string().email("Este e-mail não é válido."),
  opinion: z
    .string()
    .min(2, { message: "Escreva algo com pelo menos 2 letrinhas" }),
});

type NewOpinionFormInputs = z.infer<typeof newOpinionFormSchema>;

export function OpinionsSection() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewOpinionFormInputs>({
    resolver: zodResolver(newOpinionFormSchema),
  });

  async function handleCreateNewOpinionForm(data: NewOpinionFormInputs) {
    const { email, opinion } = data;

    console.log("Passou na validação");
    console.log("Esse é o E-mail:", email);
    console.log("Esse é a opinião cadastrada:", opinion);

    reset();
  }

  return (
    <div className="opinionsContainer">
      <div className="opinionsHeader">
        <h6>02.</h6>
        <u>Sugestões</u>
      </div>

      <div className="cols">
        <div className="colLeft">
          <form onSubmit={handleSubmit(handleCreateNewOpinionForm)}>
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
              <label htmlFor="">Sugestões, elogios ou críticas:</label>
              <textarea
                placeholder="Escreva suas sugestões, elogios ou críticas :)"
                required
                {...register("opinion")}
                className="input"
              />
            </div>

            <button type="submit" disabled={isSubmitting} className="btn btn1">
              Enviar
            </button>
          </form>
        </div>
        
        <div className="colRight">
          <img src={ideaImg} alt="" />
        </div>
      </div>
    </div>
  );
}
