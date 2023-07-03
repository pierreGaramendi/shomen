import { Autocomplete } from './autocomplete/autocomplete';
import { Logo } from './logo/logo';
import { TopbarMenu } from './menu/menu';
import { TopbarConfig } from './config/config';

export const Topbar = () => {
  return (
    <header className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between p-4 lg:mx-20">
        <Logo></Logo>
        <div id="mega-menu-full" className="items-center justify-between font-medium hidden w-full md:flex md:w-auto md:order-2">
          <TopbarMenu></TopbarMenu>
        </div>
        <div className="w-full max-w-xs order-3">
          <Autocomplete></Autocomplete>
        </div>
        <div className="flex items-center md:order-4">
          <TopbarConfig></TopbarConfig>
        </div>
      </div>
    </header>
  );
};