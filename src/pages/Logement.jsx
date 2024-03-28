import Carrousel from "../components/Carrousel"
import logements from "../data/logements.json"
import { useParams } from "react-router-dom"
import Error404 from "../pages/Error"
import Tag from "../components/Tag"
import Host from "../components/Host"
import Rate from "../components/Rate"
import Collapse from "../components/Collapse"


const Logement = () => {
    const { id } = useParams()
    const datalogement = logements.find(item => id === item.id)
    const tagsLogement = datalogement?.tags.map((tags, i) => {
      return <Tag key={i} nom={tags} />;
    });
    if (!datalogement) {
        return <Error404 />
    }

   



    return (
        <section>
            <Carrousel slides={datalogement?.pictures}></Carrousel>

            <section className="Fiche-logement">
            <div className="description-info">
              <div className="description-info__tags">
                <div className="description-info__titletags__title">
                  <span className="titre-logement">{datalogement?.title}</span>
                  <span className="endroit-logement">
                    {datalogement?.location}
                  </span>
                </div>
                {/* Tags */}
                <div className="tags">
                  {tagsLogement}
                </div>
              </div>

              <div className="description-info__proprietaire">
                {/* Hosting */}
                <div className="description-info__proprietaire__nom">
                  <Host
                    name={datalogement?.host.name}
                    picture={datalogement?.host.picture}
                  />
                </div>
                {/* Rating */}
                <div className="description-info__proprietaire__rate">
                  <Rate score={datalogement.rating} />
                </div>
              </div>
            </div>
          </section>
          <div className="collapse__logement">
            <div className="description__collapse">
              <Collapse
                title="Description"
                content={datalogement?.description}
              />
            </div>
            <div className="equipement__collapse">
              <Collapse title="Équipements" content={datalogement?.equipments} />
            </div>
          </div>
        </section> 
    )
    }



export default Logement