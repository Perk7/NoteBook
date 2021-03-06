export function addImages() {
    let deleteBtn = `
        <svg style='transform: scale(0.7);fill:#FFF;' viewBox="0 -10 95 120" xmlns="http://www.w3.org/2000/svg">
            <g
                id="g29"
                transform="matrix(0.26563024,0,0,0.26849446,-20.766972,-13.002684)">
                <path
                d="M 255.16,395.4 A 11.34,11.34 0 0 0 266.5,384.06 V 220.23 a 11.34,11.34 0 1 0 -22.67,0 v 163.83 a 11.34,11.34 0 0 0 11.33,11.34 z"
                id="path15" />
                <path
                d="m 311.85,395.4 a 11.34,11.34 0 0 0 11.33,-11.34 V 220.23 a 11.34,11.34 0 1 0 -22.67,0 v 163.83 a 11.34,11.34 0 0 0 11.34,11.34 z"
                id="path17" />
                <path
                d="m 199.38,395.4 a 11.34,11.34 0 0 0 11.34,-11.34 V 220.23 a 11.34,11.34 0 0 0 -22.68,0 v 163.83 a 11.34,11.34 0 0 0 11.34,11.34 z"
                id="path19" />
                <path
                style="fill-opacity:1;stroke:#000000;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                d="m 114.91,179.19 h 22.69 l 9.19,256.22 h 220.42001 l 9.19,-256.22 h 22.69 l -9.59909,268.14001 c 0,0 -0.81991,10.75302 -10.59568,10.79462 -9.77575,0.0416 -243.70044,0.0208 -243.70044,0.0208 0,0 -10.38544,-0.68636 -10.67976,-9.79628 C 124.22071,439.23923 114.91,179.18999 114.91,179.18999 Z"
                id="path2521" />
                <path
                d="m 380.93,94.820011 h -69.4 C 306.67487,67.961861 283.29344,48.428145 256,48.428145 c -27.29345,0 -50.67487,19.533716 -55.53,46.391866 h -67.4 C 102.78019,94.880531 78.24052,119.4202 78.18,149.71 v 18.14 c 0,6.26291 5.07709,11.34 11.34,11.34 h 25.39 284.18 25.39 c 6.26291,0 11.34,-5.07709 11.34,-11.34 V 149.71 C 435.7595,119.4202 411.2198,94.880531 380.93,94.820011 Z M 256,71.090011 c 14.77676,0.01738 27.83145,9.62618 32.24,23.73 h -64.48 c 4.40855,-14.10382 17.46324,-23.712615 32.24,-23.73 z M 137.6,179.19 H 376.4 Z M 413.14,156.51 H 100.86 v -6.8 c 0.022,-17.77995 14.43004,-32.18796 32.21,-32.21 h 247.86 c 17.77995,0.0221 32.18796,14.43005 32.21,32.21 z"
                style="stroke-width:0.990732;"
                id="delete__cover" data-svgType="lid" />
            </g>
        </svg>`
    let btn = document.querySelector('.btn-block__delete-btn').innerHTML
    document.querySelector('.btn-block__delete-btn').innerHTML = btn + deleteBtn;

    let addBtn = `
        <svg id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css">
        .st0{fill:#FFF;}
        </style><path class="st0" d="M381,236H276V131c0-11-9-20-20-20s-20,9-20,20v105H131c-11,0-20,9-20,20s9,20,20,20h105v105c0,11,9,20,20,20  s20-9,20-20V276h105c11,0,20-9,20-20S392,236,381,236z"/></svg>`
    
    btn = document.querySelector('.btn-block__add-btn').innerHTML
    document.querySelector('.btn-block__add-btn').innerHTML = btn + addBtn;
}