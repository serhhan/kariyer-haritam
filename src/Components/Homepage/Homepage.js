import React from 'react';

import './Homepage.scss';
import { Link, withRouter } from 'react-router-dom';

const Homepage = ({restartFunction}) => {
    return (
        <header>
        <div class="container">
            
            <div className="texts">
            <h1>AKADEMİK BENLİK KAVRAM ÖLÇEĞİ<br/> </h1>
            <p>Öğrenim yaşamları boyunca öğrenciler, okul seçme, seçimlik derslere veya ders dışı etkinliklerden birine yönelme konusunda kararlar vermektedirler. Bu kararlardan bazıları küçük ve önemsiz görülebilir. Ancak, her kararın, yapılan her tercihin gelecekte seçilecek mesleği adım adım belirleyici etkileri vardır. Bu nedenle öğrencilerin doğru ve isabetli karar verme becerileri geliştirmeleri büyük önem taşımaktadır. Kişinin bir konuda doğru karar verebilmesi için önce ne istediğini ve ne gibi kaynaklara (yeteneklere, mali olanaklara ve çevre desteğine) sahip olduğunu bilmesi gereklidir. Bir öğrenci hangi konulardan hoşlandığına yani ilgilerine ve hangi konuları kolay ve çabuk öğrenebildiğine yani yeteneklerine ilişkin doğru, gerçekçi ve zengin bir benlik kavramına sahip oldukça ve ders ve okul seçerken isabetli karar verme olasılığı artar. Akademik Benlik Kavramı Ölçeği öğrencilerin yetenekleri ve ilgileri hakkında daha berrak ve gerçekçi bir kavrama sahip olmalarına yardımcı olmak amacıyla Prof . Dr. Yıldız Kuzgun tarafından geliştirilmiştir.</p>
            {/* <p>Ölçekte ilgi veyetenek alanlarını yansıtan faaliyetleri ne kadar başarı ile ve ne derece sıklıkla yaptığını ya da o işi yapmaktan ne derece hoşlandığını soran sorular bulunmaktadır. Senden istenen, bu soruları dikkatle okuyup, her faaliyeti ne derece başarı ile yapabildiğini veya o işten ne derece hoşlandığını belirtmen :)</p> */}
            <Link to="/careermap" class="button" onClick = {restartFunction}>
                <span>Teste Git</span>
                <i class="far fa-arrow-alt-circle-right fa-3x"></i>
            </Link>
        </div>
        </div>
        </header>
    )
}

export default withRouter(Homepage) ;