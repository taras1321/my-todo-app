import { NavLink } from 'react-router-dom'

const Info = () => {
  return (
    <>
      <p style={{ margin: '30px 0' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corporis sunt eius accusantium error est esse impedit ab
        dolores tempore eligendi saepe deserunt ad, architecto
        consequatur doloremque! Soluta dolorem aliquid dignissimos
        autem nisi sunt molestiae fugit consectetur nobis perferendis
        dolor fuga pariatur placeat beatae neque, tempora id porro.
        Dicta veniam cumque sequi exercitationem. Beatae numquam
        veritatis quaerat reprehenderit corporis vitae aperiam
        voluptatum, aliquam unde, doloremque, pariatur ipsam obcaecati
        excepturi natus impedit labore est id eligendi ullam facere!
        Minima assumenda inventore a corporis? Reprehenderit soluta
        ea, delectus id consequatur, dolores incidunt a repellendus
        error culpa eaque adipisci ducimus minus voluptatum.
        Excepturi, necessitatibus.
      </p>

      <NavLink to="/" className="waves-effect waves-light btn">
        Назад до списку задач
      </NavLink>
    </>
  )
}

export default Info
