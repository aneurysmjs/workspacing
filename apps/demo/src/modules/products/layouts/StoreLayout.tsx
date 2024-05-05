import { type FunctionComponent, useState, lazy, Suspense } from 'react';

import { Outlet } from 'react-router-dom';

import Navigation from '@/components/common/Navigation';

import './StoreLayout.css';

const MobileMenu = lazy(() => import('@/modules/products/components/MobileMenu'));

const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP'];

const navigation = {
  categories: [
    {
      featured: [
        {
          href: '#',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          name: 'New Arrivals',
        },
        {
          href: '#',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          name: 'Basic Tees',
        },
        {
          href: '#',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          name: 'Accessories',
        },
        {
          href: '#',
          imageAlt:
            'Model opening tan leather long wallet with credit card pockets and cash pouch.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
          name: 'Carry',
        },
      ],
      name: 'Women',
    },
    {
      featured: [
        {
          href: '#',
          imageAlt:
            'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          name: 'New Arrivals',
        },
        {
          href: '#',
          imageAlt: 'Model wearing light heather gray t-shirt.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          name: 'Basic Tees',
        },
        {
          href: '#',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          name: 'Accessories',
        },
        {
          href: '#',
          imageAlt:
            'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          name: 'Carry',
        },
      ],
      name: 'Men',
    },
  ],
  pages: [
    { href: '#', name: 'Company' },
    { href: '#', name: 'Stores' },
  ],
};

const StoreLayout: FunctionComponent<PropsType> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <Suspense>
          <MobileMenu
            isOpen={mobileMenuOpen}
            currencies={currencies}
            pages={navigation.pages}
            onClose={() => setMobileMenuOpen(false)}
            categories={navigation.categories}
          />
        </Suspense>
      )}

      {/* <MobileMenu
        isOpen={mobileMenuOpen}
        currencies={currencies}
        pages={navigation.pages}
        onClose={() => setMobileMenuOpen(false)}
        categories={navigation.categories}
      /> */}

      {/* <Suspense>
        <MobileMenu
          isOpen={mobileMenuOpen}
          currencies={currencies}
          pages={navigation.pages}
          onClose={() => setMobileMenuOpen(false)}
          categories={navigation.categories}
        />
      </Suspense> */}

      {/* Hero section */}
      <div className="relative">
        {/* Navigation */}
        <Navigation
          currencies={currencies}
          pages={navigation.pages}
          onOpenMobileMenu={() => setMobileMenuOpen(false)}
          categories={navigation.categories}
        />
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default StoreLayout;
