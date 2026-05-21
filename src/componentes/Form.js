import React, { useState, useContext } from "react";
import { FinanceContext } from "../contexts/FinanceContext";

const Form = () => {
  const { addTransaction } = useContext(FinanceContext);
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);
  const [category, setCategory] = useState("Outros");
  
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const sugestoes = [
    "Despesa do(s) ajudante(s)", "Diesel", "Alimentação", "Pedagios", 
    "Manutenção do veiculo", "Autorização de mudança", "Frete (Entrada)", "Outros"
  ];

  const handleSave = () => {
    if (!desc && category === "Outros") return alert("Digite uma descrição ou escolha uma categoria!");
    if (!amount || !date) return alert("Preencha o valor e a data!");

    // NOVA LÓGICA: 
    // Se a categoria NÃO for "Outros", usamos o nome da categoria como descrição.
    // Se FOR "Outros", usamos o que você digitou (com a primeira letra maiúscula).
    let descricaoFinal;
    
    if (category !== "Outros") {
      descricaoFinal = category;
    } else {
      descricaoFinal = desc.charAt(0).toUpperCase() + desc.slice(1);
    }
    
    addTransaction({ 
      id: Math.random(), 
      desc: descricaoFinal, 
      amount: Number(amount), 
      expense: isExpense, 
      category,
      date 
    });

    setDesc(""); 
    setAmount("");
    setCategory("Outros"); // Reseta para Outros após salvar
    setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <div className="form-container" style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '10px' }}>
      <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: '2', minWidth: '200px' }}>
          <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Descrição</label>
          <input 
            style={{ padding: '8px' }} 
            value={desc} 
            onChange={(e) => setDesc(e.target.value)} 
            placeholder={category !== "Outros" ? `Usando: ${category}` : "Digite a descrição..."}
            disabled={category !== "Outros"} // Opcional: trava o campo se já escolheu uma categoria
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: '1', minWidth: '100px' }}>
          <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Valor</label>
          <input style={{ padding: '8px' }} type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: '1', minWidth: '130px' }}>
          <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Data</label>
          <input 
            style={{ padding: '8px' }} 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', flex: '1', minWidth: '120px' }}>
          <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Categoria</label>
          <select style={{ padding: '8px' }} value={category} onChange={(e) => setCategory(e.target.value)}>
            {sugestoes.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '20px', justifyContent: 'space-between', marginTop: '10px' }}>
        <div style={{ display: 'flex', gap: '15px' }}>
          <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <input type="radio" name="r" onChange={() => setExpense(false)} checked={!isExpense} /> Entrada
          </label>
          <label style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <input type="radio" name="r" onChange={() => setExpense(true)} checked={isExpense} /> Saída
          </label>
        </div>
        
        <button onClick={handleSave} className="button" style={{ 
          padding: '10px 30px', 
          backgroundColor: '#000', 
          color: '#fff', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer',
          fontWeight: 'bold' 
        }}>
          ADICIONAR
        </button>
      </div>
    </div>
  );
};

export default Form;