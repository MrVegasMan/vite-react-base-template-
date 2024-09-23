import React from 'react';
import "./OfferCard.scss";

interface BoosterCardProps {
    title: string;
    reward: number;
    icoSrc: string;

}

const OfferCard: React.FC<BoosterCardProps> = ({
                                                   title,
                                                   reward,
                                                   icoSrc
                                               }) => {
    return (
        <div className="offer-card text-left flex flex-row justify-between px-16 gap-12px relative">

            <div>
                <img src={icoSrc} alt={title} className="offer-card__ico"/>
            </div>

            <div className="flex flex-col gap-6px py-20 z-10">

                <h3 className={'compact-400-accent'}>{title}</h3>

                <p className={'subtitle'}>
                    {reward}{' '}
                    <span>
                        🧠
                    </span>

                </p>

            </div>

            <div>
                <img src={icoSrc} alt={title} className="booster-card__image"/>
            </div>
            <button type={'button'} className={'absolute size-full z-10'}></button>
        </div>
    );
};

export default OfferCard;
