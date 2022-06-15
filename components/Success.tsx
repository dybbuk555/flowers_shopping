import MetaComponent from "./Meta";
import { BRAND_NAME } from "../lib";



/* This example requires Tailwind CSS v2.0+ */
const products = [
    {
      id: 1,
      name: 'Cold Brew Bottle',
      description:
        'This glass bottle comes with a mesh insert for steeping tea or cold-brewing coffee. Pour from any angle and remove the top for easy cleaning.',
      href: '#',
      quantity: 1,
      price: '$32.00',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/confirmation-page-05-product-01.jpg',
      imageAlt: 'Glass bottle with black plastic pour top and mesh insert.',
    },
  ]
  
  const SuccessComponent = () => {
    return (<>
    <MetaComponent title={`Thank you! Order received | ${ BRAND_NAME }`} />
      <main className="bg-white px-4 pt-16 pb-24 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
        <div className="max-w-3xl mx-auto">
          <div className="max-w-xl">
            <h1 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Thank you!</h1>
            <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">It&lsquo;s on the way!</p>
            <p className="mt-2 text-base text-gray-500">Your order #14034056 has been<br/>received and will be processed<br/> shortly.</p>
  
            <dl className="mt-12 text-sm font-medium">
              <dt className="text-gray-900">Tracking number</dt>
              <dd className="text-indigo-600 mt-2">51547878755545848512</dd>
            </dl>
          </div>
  
        
        </div>
      </main>
      </>
    )
  }
  
  export default SuccessComponent;
