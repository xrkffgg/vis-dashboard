export const reportJSON = {
  layouts: {
    root: [
      { i: 'a', x: 0, y: 0, w: 24, h: 6 },
      { i: 'b', x: 0, y: 6, w: 17, h: 8 },
      { i: 'c', x: 17, y: 6, w: 7, h: 25 },
      { i: 'd', x: 0, y: 14, w: 11, h: 17 },
      { i: 'e', x: 11, y: 14, w: 6, h: 8 },
      { i: 'f', x: 11, y: 22, w: 6, h: 9 },
      { i: 'g', x: 0, y: 31, w: 10, h: 14 },
      { i: 'h', x: 10, y: 31, w: 14, h: 14 },
      { i: 'i', x: 0, y: 45, w: 12, h: 15 },
      { i: 'j', x: 12, y: 45, w: 12, h: 15 },
      { i: 'k', x: 0, y: 60, w: 12, h: 14 },
      { i: 'l', x: 12, y: 60, w: 12, h: 14 },
    ],
  },
  content: {
    tag: 'panel',
    id: 'root',
    attributes: {},
    children: [
      {
        tag: 'statistic',
        id: 'a',
        attributes: {
          title: '核心指标',
          measures: [
            'uv',
            'pv',
            'new_users',
            'latest_7_days_uv',
            'latest_30_days_uv',
          ],
          meta: {
            uv: {
              alias: '今日 UV',
            },
            pv: {
              alias: '昨日 PV',
            },
            new_users: {
              alias: '新用户',
            },
            latest_7_days_uv: {
              alias: '近 7 日 UV',
            },
            latest_30_days_uv: {
              alias: '近 30 日 UV',
            },
          },
          data: [
            {
              uv: 79,
              pv: 3286,
              new_users: 35,
              latest_7_days_uv: 366,
              latest_30_days_uv: 1372,
            },
          ],
        },
      },
      {
        tag: 'ring-progress',
        id: 'b',
        attributes: {
          title: '店铺经营状况',
          measures: ['code1', 'code2', 'code3', 'code4'],
          meta: {
            code1: {
              icon:
                "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' version='1.1'><path d='M944.835302 353.586994l-10.800419-2.486857 2.493038-10.773634c16.074946-69.444507-42.954431-133.255984-112.324764-123.724748-56.315879 7.73872-98.122688 38.501988-135.84998 80.263468H335.648018V762.684266H512.000598c16.064644 69.811252 78.722318 142.008402 120.60948 180.96573 100.970109 93.915429 204.639292 25.921416 201.645586-59.540346l-0.387348-11.047662 11.076507-0.385288c109.901779-3.828153 167.64961-171.560177-49.226173-262.896032 58.096032-5.060249 116.241513-22.618656 154.584853-46.518857 23.337722-14.542036 42.389891-33.33666 56.783581-54.743823 38.96763-57.955928 7.446149-138.882833-62.251782-154.930994z' fill='#FFB5C0' p-id='5532'></path><path d='M685.213185 91.035042C654.371624 28.395911 560.783793 15.164266 512.000598 67.338817c-48.783195-52.174551-142.371026-38.942905-173.212588 23.696225-28.177513 57.23068-22.142712 144.404604-3.139992 205.832242-37.727292-41.761481-79.536161-72.524748-135.84998-80.263469-69.370334-9.531235-128.39971 54.278181-112.324764 123.724748l2.493038 10.773634-10.800419 2.486857c-69.697932 16.048161-101.219412 96.975066-62.253843 154.933055 14.39369 21.407163 33.445859 40.201787 56.783582 54.743823 38.34334 23.898141 96.490881 41.456547 154.584853 46.518857-216.873722 91.331734-159.125891 259.063759-49.226173 262.891911l11.076507 0.385288-0.387348 11.047662c-2.991646 85.461763 100.675477 153.455775 201.645585 59.540346 41.887163-38.957328 104.544837-111.154479 120.609481-180.96573a430.852636 430.852636 0 0 1-10.363622-58.300008l137.43852-367.968322a440.163412 440.163412 0 0 1 49.277682-39.548652c19.004781-61.427638 25.039581-148.601561-3.137932-205.832242z' fill='#FF8E9E' p-id='5533'></path><path d='M327.043946 468.639678l-137.04087-78.227831a15.452716 15.452716 0 0 0-15.320853 26.838278l137.040869 78.227831z' fill='#EA5B70' p-id='5534'></path><path d='M855.077684 396.170559a15.450656 15.450656 0 0 0-21.079565-5.758712l-137.04087 78.227831 15.320854 26.840338 137.040869-78.227831a15.452716 15.452716 0 0 0 5.758712-21.081626z' fill='#FF8E9E' p-id='5535'></path><path d='M274.210078 779.212491a15.452716 15.452716 0 0 0 22.2993 21.396861l117.115107-122.062036-22.30136-21.396861z' fill='#EA5B70' p-id='5536'></path><path d='M632.667769 657.142213l-22.301361 21.396861 117.123348 122.068218a15.452716 15.452716 0 0 0 22.2993-21.396861z' fill='#FF8E9E' p-id='5537'></path><path d='M512.000598 160.364169a15.452716 15.452716 0 0 0-15.452717 15.452716V308.024145h30.905433V175.816885a15.452716 15.452716 0 0 0-15.452716-15.452716z' fill='#EA5B70' p-id='5538'></path><path d='M639.075495 336.417996H501.636976v367.968322c3.434624 0.17101 6.887791 0.259606 10.363622 0.259606 113.789682 0 206.036217-92.244475 206.036217-206.036218 0-65.845054-30.886889-124.47472-78.96132-162.19171z' fill='#FFDBE0' p-id='5539'></path><path d='M512.000598 292.571429c-113.789682 0-206.036217 92.244475-206.036218 206.036217 0 110.313851 86.69592 200.378463 195.672596 205.776612 0-137.415855 34.478101-272.423147 137.438519-367.968322C604.067881 308.951308 559.947286 292.571429 512.000598 292.571429z' fill='#FFB5C0' p-id='5540'></path><path d='M382.069006 572.924881a41.207243 32.815388 0.11 1 0 0.126002-65.630656 41.207243 32.815388 0.11 1 0-0.126002 65.630656Z' fill='#FF8E9E' p-id='5541'></path><path d='M641.875527 507.951388c-22.758761-0.049449-41.238149 14.601787-41.279356 32.724733-0.039147 18.122946 18.37637 32.856596 41.135131 32.906044s41.240209-14.601787 41.279356-32.724732-18.37637-32.854535-41.135131-32.906045z' fill='#FF8E9E' p-id='5542'></path><path d='M399.638746 476.879066a15.452716 15.452716 0 0 0-15.452716 15.452717v24.724346a15.452716 15.452716 0 0 0 30.905433 0v-24.724346a15.452716 15.452716 0 0 0-15.452717-15.452717zM624.006006 476.879066a15.452716 15.452716 0 0 0-15.452716 15.452717v24.724346a15.452716 15.452716 0 0 0 30.905432 0v-24.724346a15.452716 15.452716 0 0 0-15.452716-15.452717zM565.767809 517.843187a15.452716 15.452716 0 0 0-15.452717 15.452716c0 6.249078-5.082913 11.331992-11.331991 11.331992s-11.331992-5.082913-11.331992-11.331992a15.452716 15.452716 0 0 0-30.905433 0c0 6.249078-5.082913 11.331992-11.331992 11.331992s-11.331992-5.082913-11.331992-11.331992a15.452716 15.452716 0 0 0-30.905433 0c0 35.565972 41.547203 55.221827 69.022133 32.629956 27.470809 22.589811 69.022133 2.940137 69.022133-32.629956a15.452716 15.452716 0 0 0-15.452716-15.452716z' fill='#313D40'></path></svg>",
            },
            code2: {
              icon:
                "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' version='1.1'><path d='M870.821295 157.430542c-39.399335-22.468734-90.200348-33.68417-143.064346-31.585369-51.645241 2.051729-102.814644 16.627702-144.081513 41.042765-30.863938 18.261922-55.376215 41.197284-72.877821 68.186985-14.413268-21.694091-33.507138-41.092907-56.860009-57.435107-47.981804-33.577746-111.930255-52.538587-175.371146-52.03819-56.715723 0.453325-108.814288 16.506952-146.698107 45.203528-44.914956 34.022884-68.655659 83.513042-68.655659 143.119605 0 104.022145 73.251328 232.207619 217.718627 380.993271 104.96768 108.10616 208.244858 186.284707 212.590839 189.56031l18.478863 13.927197 18.478863-13.927197c4.344958-3.275603 107.623159-81.455173 212.590839-189.56031 144.467299-148.785651 217.718627-276.971126 217.718627-380.993271C960.787306 246.092861 928.836617 190.515055 870.821295 157.430542zM699.55156 651.599432c-76.157517 78.507028-153.22373 142.104485-187.555653 169.419598-34.226522-27.223015-110.925369-90.505293-187.015348-168.870082-131.083477-135.001717-200.369493-251.957429-200.369493-338.223165 0-40.209794 14.914688-71.895447 44.330648-94.177939 27.41949-20.770046 66.526159-32.400944 110.115933-32.749892 0.681522-0.005117 1.355881-0.008186 2.037403-0.008186 50.314942 0 100.379175 14.877849 137.6398 40.953737 28.046776 19.627013 93.26515 110.744243 93.26515 110.744243s69.435419-99.133811 102.94051-118.957299c67.484997-39.926338 164.414607-43.781132 225.466078-8.964162 39.138392 22.319331 58.983369 57.026808 58.983369 103.159498C899.388934 400.065651 830.28609 516.832052 699.55156 651.599432z' p-id='5757'></path></svg>",
            },
            code3: {
              icon:
                "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' version='1.1'><path d='M1092.296932 19.39769c-5.79931-12.998452-17.197952-19.39769-28.596596-19.39769-10.598738 0-21.397452 5.599333-27.996666 16.997976C973.711051 124.785143 862.724265 191.977143 735.93936 191.977143h-159.980952C363.983646 191.977143 192.004123 363.956666 192.004123 575.931428c0 35.595762 5.199381 69.79169 14.198309 102.38781C58.020075 807.30388 3.626551 957.485999 2.62667 960.285666c-8.598976 24.997024 4.599452 52.393762 29.596477 60.992738 27.996667 9.598857 53.393643-7.599095 60.992738-29.596476 0.799905-2.199738 41.995-114.986309 152.581833-220.173786C320.988765 897.893095 462.971861 973.884047 616.753551 957.685976 930.916146 934.88869 1151.889836 653.322214 1151.889836 308.563262c0-100.388048-21.597429-204.375667-59.592904-289.165572zM606.754741 862.297333c-172.1795 18.197833-261.168905-108.987024-284.366142-152.981786 94.788714-65.792167 223.973333-117.386024 397.752642-117.386024 26.396857 0 47.994286-21.597429 47.994286-47.994285s-21.597429-47.994286-47.994286-47.994286c-182.578262 0-322.161643 50.993929-427.949047 118.785857-1.799786-12.798476-3.999524-25.596952-3.999524-38.795381 0-158.781095 129.184619-287.965714 287.965714-287.965714h159.980953c115.786214 0 223.173428-43.994762 303.963809-121.7855 10.398762 46.394476 15.998095 94.98869 15.998095 142.383048-0.199976 301.964047-187.777643 534.736333-449.3465 553.734071z' p-id='2118'></path></svg>",
            },
            code4: {
              icon:
                "<svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' version='1.1'><path d='M592.03 440.871h110.788c20.205 0 36.746 16.463 36.746 36.589 0 20.086-16.541 36.588-36.746 36.588H540.436v109.686h162.382c20.205 0 36.746 16.463 36.746 36.588 0 20.087-16.541 36.55-36.746 36.55H540.436v106.023c0 19.928-15.99 36.234-35.565 36.234a35.998 35.998 0 0 1-35.525-36.234V696.87H335.44a36.746 36.746 0 0 1-36.785-36.549c0-20.086 16.541-36.588 36.745-36.588h133.908V514.048H335.4a36.746 36.746 0 0 1-36.745-36.588c0-20.086 16.541-36.589 36.745-36.589h96.571l-122.25-122.25a35.604 35.604 0 0 1 0-51.593 35.604 35.604 0 0 1 51.594 0L512 417.792l150.725-150.686a35.604 35.604 0 0 1 51.594 0 35.604 35.604 0 0 1 0 51.555l-122.29 122.25zM512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m0-950.863C270.612 73.137 73.137 270.612 73.137 512S270.612 950.863 512 950.863 950.863 753.388 950.863 512 753.388 73.137 512 73.137z' p-id='3937'></path></svg>",
            },
          },
          data: [
            {
              code1: 0.6,
              code2: 0.6,
              code3: 0.6,
              code4: 0.6,
            },
          ],
        },
      },
      {
        tag: 'bar',
        id: 'c',
        attributes: {
          title: '产品好评度排行',
          /** 非 G2Plot 树形，自定义条形图展示样式 */
          styleType: 'rank',
          data:
            'https://gw.alipayobjects.com/os/antfincdn/R%26O2e0Z0w1/chanpinhaopingdupaihang-data.json',
          xField: 'value',
          yField: 'type',
          barStyle: { lineCap: 'round' },
          barBackground: { style: { fill: 'rgba(0,0,0,0.06)', radius: 10 } },
          minBarWidth: 10,
          maxBarWidth: 10,
          xAxis: false,
          yAxis: false,
          label: false,
          interactions: [{ type: 'active-region', enable: false }],
          tooltip: {
            showCrosshairs: false,
            showTitle: false,
            itemTpl: `<li class="g2-tooltip-list-item" data-index={index} style="margin-bottom:4px;display:flex;">
            <span style="background-color:{color};" class="g2-tooltip-marker"></span>
            <span class="g2-tooltip-name">{title}:</span>
            <span class="g2-tooltip-value">{value}</span>
         </li>`,
          },
        },
      },
      {
        tag: 'column',
        id: 'd',
        attributes: {
          title: '顾客职业分布',
          data:
            'https://gw.alipayobjects.com/os/antfincdn/PC3daFYjNw/column-data.json',
          xField: 'city',
          yField: 'value',
          seriesField: 'type',
          isGroup: 'true',
          columnStyle: {
            radius: [2, 2, 0, 0],
          },
          xAxis: { title: { text: '职业' } },
          yAxis: { title: { text: '顾客人数' } },
          minColumnWidth: 6,
          maxColumnWidth: 12,
          dodgePadding: 1,
        },
      },
      {
        tag: 'gauge',
        id: 'e',
        attributes: {
          title: '年度销售目标',
          percent: 0.87,
          type: 'meter',
          radius: 0.95,
          innerRadius: 0.75,
          startAngle: -Math.PI,
          endAngle: 0,
          range: {
            color: 'l(0) 0:#0099FF 0.25:#09ADDF 0.75:#15C8B7 1:#1EDB9A',
          },
          meter: {
            steps: 30,
            stepRatio: 0.75,
          },
          indicator: false,
          statistic: {
            title: {
              formatter: () => '目标完成度',
              offsetY: 12,
              style: {
                color: '#000',
                opacity: 0.65,
                fontSize: '12px',
              },
            },
            content: {
              style: {
                color: '#000',
                opacity: 0.85,
                fontSize: '24px',
              },
            },
          },
        },
      },
      {
        tag: 'gauge',
        id: 'f',
        attributes: {
          title: '店铺卫生状况',
          percent: 0.87,
          type: 'meter',
          radius: 0.95,
          innerRadius: 0.75,
          range: {
            ticks: [0, 0.25, 0.5, 0.75, 1],
            color: [
              'r(0,0,1) 0:#FAAD14 1:#F4664A',
              'r(0.1,1,1) 0:#FAAD14 1:#CBFF49',
              'r(0,0,1) 0:#CEEE27 1:#30BF78',
              'r(0,0,1) 0:#A0D911 1:#30BF78',
            ],
          },
          meter: {
            steps: 4,
            stepRatio: 0.95,
          },
          indicator: false,
          axis: false,
          statistic: false,
          annotations: [
            {
              type: 'html',
              top: false,
              position: ['50%', '62.5%'],
              html: (container, view) => {
                const coordiante = view.views[0].getCoordinate();
                const radius =
                  coordiante.getRadius() *
                  coordiante.radius *
                  coordiante.innerRadius;
                const size = radius * 1.5;
                // const startAngle = (-7 / 6) * Math.PI;
                // const endAngle = (1 / 6) * Math.PI;
                // const angle =
                //   (endAngle - startAngle) * 0.87 -
                //   startAngle +
                //   (Math.PI * 2) / 3;
                const markerSize = 10;
                const offsetX = radius - markerSize / 2;
                const offsetY = markerSize * 0.625;
                return `<div style="position:relative;height:${size}px;width:${size}px;transform:translate(-50%,-50%);display:flex;align-items: center;justify-content: center;flex-direction: column;">
                <div style="z-index:-2;position:absolute;left:${
                  radius / 2
                }px;top:${
                  radius / 2
                }px;height:${markerSize}px;width:${markerSize}px;opacity:0.25;transform:translate(${offsetX}px,${offsetY}px) rotate(45deg);background: #000000;"></div>
                <div style="z-index:-1;position:absolute;top:0;left:0;right:0;bottom:0;border-radius:${size}px;background:#FFFFFF;box-shadow: 0 3px 6px -4px rgba(0,0,0,0.12), 0 6px 16px 0 rgba(0,0,0,0.08), 0 9px 28px 8px rgba(0,0,0,0.05);"></div>
                   <div style="color:#30BF78;opacity: 1;font-weight: 700;font-size: 18px;">优秀</div>
                   <div style="color:rgba(0,0,0,0.45);font-size: 12px">卫生评级</div>
                </div>`;
              },
            },
          ],
        },
      },
      {
        tag: 'radial-bar',
        id: 'g',
        attributes: {
          title: '店铺服务满意度',
          data: [
            { type: '很满意', value: 800 },
            { type: '还可以', value: 400 },
            { type: '不太好', value: 600 },
            { type: '不好', value: 100 },
          ],
          xField: 'type',
          yField: 'value',
          colorField: 'type',
          radius: 0.85,
          innerRadius: 0.6,
          barBackground: {},
          barStyle: { lineCap: 'round' },
          xAxis: false,
          tooltip: {
            showCrosshairs: false,
            showTitle: false,
            itemTpl: `<li class="g2-tooltip-list-item" data-index={index} style="margin-bottom:4px;display:flex;">
                <span style="background-color:{color};" class="g2-tooltip-marker"></span>
                <span class="g2-tooltip-name">{title}:</span>
                <span class="g2-tooltip-value">{value}</span>
            </li>`,
          },
          annotations: [
            {
              type: 'html',
              position: ['50%', '50%'],
              html: (container, view) => {
                const width = view.getCoordinate().getRadius() * 0.4;
                container.style.transform = `translate(-50%, -${width}px)`;
                return `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="${width}px" height="${width}px" fill="rgba(0,0,0,0.65)"><path d="M689.00486 572.124909c79.006322-55.180406 130.7762-146.675053 130.7762-250.346961 0-168.551225-136.490232-305.173608-305.173608-305.173608-168.551225 0-305.087201 136.621367-305.087201 305.173608 0 103.580419 51.547254 194.921567 130.468185 250.079609C162.135773 641.653928 36.012326 814.3232 36.012326 1016.886178c0 0.086407 0 0.086407 0 0.086407l85.691159 0c0-0.217542 0-0.484895 0-0.707519 0-200.834842 151.237333-365.976556 346.051145-388.827599 1.990406-0.131135 54.644684-4.739159 97.912132 0.729883 1.065345 0.244989 2.217097 0.331396 3.324121 0.553004l0.484895 0c189.942501 27.190699 335.996442 190.119381 335.996442 387.544712 0 0.222625 0 0.489977 0 0.707519l87.023857 0c0 0 0 0 0-0.086407C992.496077 814.544808 866.635916 641.961943 689.00486 572.124909L689.00486 572.124909zM514.785349 550.557769c-126.259665 0-228.693415-102.34226-228.693415-228.64767S388.525684 93.262429 514.785349 93.262429c126.21392 0 228.64767 102.34226 228.64767 228.64767S640.999269 550.557769 514.785349 550.557769L514.785349 550.557769zM514.785349 550.557769" p-id="2751"></path></svg>`;
              },
            },
            {
              type: 'html',
              position: ['50%', '50%'],
              html: (container, view) => {
                const width = view.getCoordinate().getRadius();
                // 🧙‍♀️ 魔法调整
                container.style.transform =
                  width < 80
                    ? 'translate(-50%, 0px) scale(0.8)'
                    : 'translate(-50%, 8px)';
                const sum = view.getData().reduce((a, b) => a + b.value, 0);
                return `<div>
                  <span style="font-size:32px;line-height:32px;color:#000;opacity:0.65;">${sum}</span>
                  <span style="font-size:18px;color:#000;opacity:0.45;">人</span>
                </div>`;
              },
            },
          ],
        },
      },
      {
        tag: 'sankey',
        id: 'h',
        attributes: {
          title: '订单来源',
          data: [
            { source: '首页推荐', target: '跳转', value: 25 },
            { source: '我的', target: '跳转', value: 20 },
            { source: '财富', target: '跳转', value: 15 },
            { source: '公益', target: '跳转', value: 12 },
            { source: '其他', target: '跳转', value: 7 },

            { source: '跳转', target: '消息', value: 32 },
            { source: '跳转', target: '商家生活号', value: 28.8 },
            { source: '跳转', target: '其他渠道', value: 16.4 },
          ],
          sourceField: 'source',
          targetField: 'target',
          weightField: 'value',
          nodeWidthRatio: 0.008,
          nodePaddingRatio: 0.03,
        },
      },
      {
        tag: 'scatter',
        id: 'i',
        attributes: {
          title: '店内环境风格喜好',
          data: [
            { x: 1, y: 2, value: 10, type: '韩式清新' },
            {
              x: 5,
              y: 1.5,
              value: 90,
              type: '北欧风格',
            },
            { x: 3, y: 1, value: 60, type: '日式极简' },
            { x: 8, y: 2, value: 30, type: '新中式' },
            {
              x: 9,
              y: 0.5,
              value: 20,
              type: '美式复古',
            },
          ],
          xField: 'x',
          yField: 'y',
          colorField: 'type',
          sizeField: 'value',
          size: [5, 100],
          shape: 'circle',
          meta: {
            x: { max: 10, min: 0 },
            y: { max: 3, min: 0 },
            value: { max: 90, min: 0, alias: '人数占比' },
          },
          yAxis: false,
          xAxis: false,
          pointStyle: {
            shadowColor: 'rgba(0,0,0,0.25)',
            shadowBlur: 20,
            lineWidth: 0,
          },
          legend: { position: 'top-left' },
          tooltip: {
            showCrosshairs: false,
            containerTpl:
              '<div class="g2-tooltip"><div class="g2-tooltip-list"></div></div>',
            fields: ['value'],
          },
          label: {
            layout: [{ type: 'limit-in-shape' }],
            offsetY: 12,
            style: {
              fontSize: 18,
              textAlign: 'center',
              fill: '#fff',
              fontWeight: 500,
            },
          },
        },
      },
      {
        tag: 'area',
        id: 'j',
        attributes: {
          title: '年度销售额趋势图',
          data:
            'https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json',
          xField: 'timePeriod',
          yField: 'value',
          xAxis: {
            range: [0.02, 0.98],
          },
        },
      },
      {
        tag: 'sankey',
        id: 'k',
        attributes: {
          title: '店内促销活动参与情况',
          sourceField: 'source',
          targetField: 'target',
          weightField: 'value',
          nodeWidthRatio: 0.02,
          nodePaddingRatio: 0.05,
          data: [
            { source: '参与游客', target: '游戏一', value: 16000 },
            { source: '参与游客', target: '游戏二', value: 19000 },
            { source: '参与游客', target: '游戏三', value: 18800 },

            { source: '游戏一', target: '全部通关', value: 2500 },
            { source: '游戏一', target: '通关过半', value: 9500 },
            { source: '游戏一', target: '未通关', value: 4000 },

            { source: '游戏二', target: '全部通关', value: 2500 },
            { source: '游戏二', target: '通关过半', value: 12500 },
            { source: '游戏二', target: '未通关', value: 4000 },

            { source: '游戏三', target: '全部通关', value: 2500 },
            { source: '游戏三', target: '通关过半', value: 12500 },
            { source: '游戏三', target: '未通关', value: 3800 },
          ],
        },
      },
      {
        tag: 'pie',
        id: 'l',
        attributes: {
          title: '基础环图',
          angleField: 'value',
          colorField: 'type',
          data: [
            { type: '分类一', value: 230 },
            { type: '分类二', value: 160 },
            { type: '分类三', value: 158 },
            { type: '分类四', value: 120 },
          ],
          radius: 0.85,
          innerRadius: 0.75,
          legend: { ' position': 'right-center' },
          label: false,
          pieStyle: { lineCap: 'round' },
          statistic: {
            title: {
              customHtml: (container, view) => {
                const width = view.getCoordinate().getRadius() * 0.4;
                container.style.transform = `translate(-50%, -${width}px)`;
                return `<svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="${width}px" height="${width}px" fill="rgba(0,0,0,0.65)"><path d="M689.00486 572.124909c79.006322-55.180406 130.7762-146.675053 130.7762-250.346961 0-168.551225-136.490232-305.173608-305.173608-305.173608-168.551225 0-305.087201 136.621367-305.087201 305.173608 0 103.580419 51.547254 194.921567 130.468185 250.079609C162.135773 641.653928 36.012326 814.3232 36.012326 1016.886178c0 0.086407 0 0.086407 0 0.086407l85.691159 0c0-0.217542 0-0.484895 0-0.707519 0-200.834842 151.237333-365.976556 346.051145-388.827599 1.990406-0.131135 54.644684-4.739159 97.912132 0.729883 1.065345 0.244989 2.217097 0.331396 3.324121 0.553004l0.484895 0c189.942501 27.190699 335.996442 190.119381 335.996442 387.544712 0 0.222625 0 0.489977 0 0.707519l87.023857 0c0 0 0 0 0-0.086407C992.496077 814.544808 866.635916 641.961943 689.00486 572.124909L689.00486 572.124909zM514.785349 550.557769c-126.259665 0-228.693415-102.34226-228.693415-228.64767S388.525684 93.262429 514.785349 93.262429c126.21392 0 228.64767 102.34226 228.64767 228.64767S640.999269 550.557769 514.785349 550.557769L514.785349 550.557769zM514.785349 550.557769" p-id="2751"></path></svg>`;
              },
            },
            content: {
              customHtml: (container, view) => {
                const width = view.getCoordinate().getRadius();
                // 🧙‍♀️ 魔法调整
                container.style.transform =
                  width < 80
                    ? 'translate(-50%, 0px) scale(0.8)'
                    : 'translate(-50%, 8px)';
                const sum = view.getData().reduce((a, b) => a + b.value, 0);
                return `<div style="font-weight: normal;">
                  <span style="font-size:32px;line-height:32px;color:#000;opacity:0.65;">${sum}</span>
                  <span style="font-size:18px;color:#000;opacity:0.45;">人</span>
                </div>`;
              },
            },
          },
        },
      },
    ],
  },
};