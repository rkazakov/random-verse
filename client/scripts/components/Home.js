import React from 'react'
import { Link } from 'react-router'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row text">
          Здесь мы собираем самые вдохновляющие тексты.
          На сайте, наполненном мыслями мудрецов и философов, афоризмами писателей и выдающихся людей, нет ни каталога фраз, ни списка авторов. Мы не верим в случайный выбор. Вы сами руководите своей судьбой. Просто прислушайтесь к себе. Задумайтесь, и одно из самых вдохновляющих высказываний человечества послужит знаком именно для Вас.
        </div>
        <div className="row button-read">
          <Link to={'verse'} className="button button-primary">Читать</Link>
        </div>
      </div>
    );
  }
};
