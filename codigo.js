function Ingreso()
{
    var mPassword =  document.getElementById("txtPassword").value;
    if (mPassword == "Passw0rd")
    {
        window.location.href="main.html"
    }
    else
    {
        alert ("Password no es correcto intentelo de nuevo !!!!");
    }
    

}

function CambiarMarca()
{
    var  mMarca  = document.getElementById("cmbMarca")
   // alert("Entro : " + mMarca.value);
   switch(mMarca.value)
   {
    case "1":
        document.getElementById("txtPrecio").value =  7000;
        break;
    case "2":
            document.getElementById("txtPrecio").value =  13000;
            break;
    case "3":
                document.getElementById("txtPrecio").value =  6000;
                break;
    case "4":
        document.getElementById("txtPrecio").value =  5000;
        break;
    case "5":
        document.getElementById("txtPrecio").value =  7000;
        break;
   }
}


function codigoExtras(extra){
   
    var mPrecio = document.getElementById("txtPrecio").value;

    switch(extra)
    {
        case 1:
            var temporal = document.getElementById("chkRines")
            if (temporal.checked)
            {
                mPrecio = parseFloat(mPrecio) + 300;
            }
            else
            {
                mPrecio = parseFloat(mPrecio) - 300;
            }
            break;
        case 2:
            var temporal = document.getElementById("chkParrilla")
            if (temporal.checked)
            {
                mPrecio = parseFloat(mPrecio) + 150;
            }
            else
            {
                mPrecio = parseFloat(mPrecio) - 150;
            }
              break;
        case 3:
            var temporal = document.getElementById("chkDefensa")
            if (temporal.checked)
            {
                mPrecio = parseFloat(mPrecio) + 500;
            }
            else
            {
                mPrecio = parseFloat(mPrecio) - 500;
            }
              break;
        case 4:
            var temporal = document.getElementById("chkPamtalla")
            if (temporal.checked)
            {
                mPrecio = parseFloat(mPrecio) + 200;
            }
            else
            {
                mPrecio = parseFloat(mPrecio) - 200;
            }
              break;
        }
        document.getElementById("txtPrecio").value = mPrecio;

}
