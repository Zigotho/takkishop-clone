import React from 'react'

import { Images } from './components/Image'
import { Sections } from './components/Sections'

export const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full">
      <div className="bg-primary-800">
        <div className="flex justify-around text-white p-5">
          <div>
            <Sections className="" title="NAVEGAÇÃO">
              <div className="font-sans text-sm">
                <li className="hover:underline cursor-pointer">
                  Pagina inicial
                </li>
                <li className="hover:underline cursor-pointer">Quem Somos</li>
                <li className="hover:underline cursor-pointer">Como comprar</li>
                <li className="hover:underline cursor-pointer">
                  Política de Privacidade
                </li>
              </div>
            </Sections>
          </div>
          <div>
            <Sections title="FORMAS DE PAGAMENTO">
              <Images
                payments={[
                  'visa',
                  'masterCard',
                  'americanExpress',
                  'aura',
                  'boletoBancario',
                  'dinersClub',
                  'elo',
                  'hiperCard',
                  'pagseguro',
                ]}
              ></Images>
            </Sections>
          </div>
          <div>
            <Sections title="CONTATO">
              <div className="max-w-sm">
                <p>11940121104</p>
                <p>atendimento@takkishop.com.br</p>
                <p>
                  Não possuímos loja física, nosso escritório fica na Rua
                  Baianópolis, 169 - CEP 04835-190 - São Paulo
                </p>
              </div>
            </Sections>
          </div>
        </div>
      </div>
      <div className="bg-merchant-bg flex text-white justify-around">
        <div className=" m-5 flex w-full justify-around items-center">
          <div className="justify-center text-xs">Criado por Computec</div>
          <div className="justify-center text-xs">
            Copyright TAKKI SHOP - 2022. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </div>
  )
}
