import React from 'react'
/**
 * **********
 * ÖNEMLİ!!!
 * **********
 * 
 * return sadece bir element döndürür h1, p, li vs.
 * tag lerin class özelliği yerine className kullanılır
 * 
 * 
 * @returns 
 * 
 */


export default function CreateUser() {

    /**
     * state -> local takip edilir(durum) 
     * 
     * useState kullanım -syntax
     * const [degişkenadi, degişkeni güncelleyen fonksiyon] = useState(değişkenin başlangıç degeri)
     */

    const [data, setData] = React.useState([
        {
            id: 1,
            username: "user1",
            password: "1234"
        },
        {
            id: 2,
            username: "user2",
            password: "1234"
        },
        {
            id: 3,
            username: "user3",
            password: "1234"
        }
    ]
    );

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repassword, setRepassword] = React.useState('');

    const saveUser = () => {
        if (password === repassword)
            setData([...data, {
                id: 5,
                username: username,
                password: password
            }]);
        else
                alert("Şifreler uyuşmuyor");
    }

    const enterUser = (evt) => {
        setUsername(evt.target.value);
    }

    const enterPassword = (evt) => {
        setPassword(evt.target.value);
    }

    const enterRePassword = (evt) => {
        setRepassword(evt.target.value);
    }


    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-3'> </div>
                <div className='col-md-6'>
                    <div className='mb-3'>
                        <label className='form-label'>Kullanıcı Adı</label>
                        <input type="text" className='form-control' onChange={enterUser} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Şifre</label>
                        <input type="password" className='form-control' onChange={enterPassword} />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Şifre Tekrar</label>
                        <input type="password" className='form-control'
                            onChange={enterRePassword} />
                    </div>

                    <div className='mb-3'>
                        <button className='btn btn-primary' onClick={saveUser}>Save</button>
                    </div>
                    <div className='col-md-3'></div>
                </div>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <table className='table table-hover'>
                            <thead>
                                <tr>
                                    <th>Kullanıcı Adı</th>
                                    <th>Şifre</th>
                                    <th>İşlemler</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((d, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{d.username}</td>
                                                <td>{d.password}</td>
                                                <button className='btn btn-danger'
                                                >Sil</button>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        </div>

    )
}
