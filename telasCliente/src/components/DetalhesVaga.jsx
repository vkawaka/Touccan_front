import React from 'react';
import './DetalhesVaga.css';
import { Link, useNavigate } from "react-router-dom";

const DetalhesVaga = () => {

    const navigate = useNavigate();

    const handleDelete = async () => {
        const confirmDelete = window.confirm("Você tem certeza que deseja excluir este anúncio?");
        if (confirmDelete) {
            try {
                const response = await fetch('http://localhost:8080/2.0/touccan/bico/', {
                    method: 'DELETE',
                });

                if (response.ok) {
                    alert("Anúncio excluído com sucesso!");
                    navigate('/home'); 
                } else {
                    alert("Erro ao excluir o anúncio.");
                }
            } catch (error) {
                console.error("Erro:", error);
                alert("Erro ao excluir o anúncio.");
            }
        }
    };

    return (
        <div className="detalhes-vaga">
            <div className="container-detalhes">
                <div className="info-nome-dificuldade">
                    <div className="info-empresa">
                        <picture>
                            <img src="../../img/person.png" alt="" />
                        </picture>
                        <h2></h2>
                    </div>
                    <div className="info-dificuldade">
                        <span>Dificuldade: </span>
                    </div>
                </div>

                <h3 className='titulo-trabalho-detalhes'></h3>
                <p className='descricao-detalhes'></p>

                <div className="info-horario-pagamento">
                    <span>Data: </span> <br />
                    <span>Início: </span> <br />
                    <span>Fim: </span>
                    <div>
                        <span>Pagamento: </span><span className='valor-pagamento'>R$200,00</span>
                    </div>
                </div>
            </div>
            <div className="container-botoes">
                <Link to='./candidatos'>
                    <button className="ver-candidatos">
                        Ver candidatos
                    </button>
                </Link>
                
                <button className="excluir-anuncio" id='excluir-anuncio' onClick={handleDelete}>
                    Excluir anúncio
                </button>
            </div>
        </div>
    );
}

export default DetalhesVaga;
