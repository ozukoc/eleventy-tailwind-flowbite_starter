# 11ty Starter Template using TailwindCss and Flowbite Components

<p align="center" width="100%">
    <img width="33%" src="https://github.com/ozukoc/eleventy-tailwind-flowbite_starter/blob/main/src/assets/images/ss.png"> 
</p>


I needed to create a static website that I can implement Flowbite components to easily and quickly manage it, I found some examples for 11ty+Tailwind and I wanted to add Flowbite to it.
This repo will be usefull for me in the future projects. Hope it can be usefull for you aswell.

### Built With

* [Eleventy Static Site Generator](https://www.11ty.dev/)
* [TailwindCSS](https://tailwindcss.com/)
* [Flowbite-Components](https://flowbite.com)

## Some Notes on Project

* Currently I included Flowbite via CDN but in the future I will update it.
* Using combined npm run commands sometimes cause problems like not updating css, so I am using split terminal in Vscode and running separete commands for tailwindcss and Eleventy.
* No global css variables defined so it is very barebone, you can use Tailwind classes or even create your classes to modify.
* There is darkmode implemented in main.js file, also in the head section of base.html there is a script for listening default theme. You can implement dark mode with css classes to any component, just use dark css class like this;

   ```sh
   dark:bg-<here comes the color>-600
   dark:text-white
   ```

* I will update the repo as I create other projects starting with this starter template, so when I see the missing/improvable parts. If you see any mistake or do have a suggestion do not hesitate to contribute or just send an [e-mail](mailto:ozdes24@gmail.com) =)

<!-- GETTING STARTED -->
## Getting Started

I assume you have node.js installed already.Open up your VsCode Terminal and follow below.

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/ozukoc/eleventy-tailwind-flowbite_starter.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Build with pre-defined script

   ```sh
   npm run build;
   ```

   PS: In case you run into css problems in site, this command is combined script but I prefer using split terminal and running tailwind and 11ty scripts separate like this:

   ```sh
   npm run tail
   npm run 11ty   
   ```

   This solves my issues with not updated css.

4. Edit the site however you want

5. Leave a star =) Thank you!

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the GNU General Public License v3. See [LICENSE.txt](https://github.com/ozukoc/eleventy-tailwind-flowbite_starter/blob/main/LICENSE) for more information.

## Contact

Özü Özdeş KOÇ - [@twitter](https://twitter.com/ozukoc) - ozdes24 [@] gmail.com

Project Link: [eleventy tailwind flowbite starter template](https://github.com/ozukoc/eleventy-tailwind-flowbite_starter)
