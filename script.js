function getSuggestions() {
    var crop = document.getElementById("crop").value;
    var soilType = document.getElementById("soilType").value;
    var suggestion = "";
  
    // switch (crop) {
    //   case "ALMONDS":
    //     switch (soilType) {
    //       case "SAND":
    //         suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 8-10L/ha Fortnightly";
    //         break;
    //       case "LOAMY SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "SANDY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       default:
    //         suggestion = "Please select a soil type";
    //     }
    //     break;
    //   case "AVOCADES":
    //     switch (soilType) {
    //       case "SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "SANDY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       default:
    //         suggestion = "Please select a soil type";
    //     }
    //     break;
    //   case "BERRIES":
    //     switch (soilType) {
    //       case "SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "SANDY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       default:
    //         suggestion = "Please select a soil type";
    //     }
    //     break;
    //   case "BRASSICAS":
    //     switch (soilType) {
    //       case "SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "SANDY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       default:
    //         suggestion = "Please select a soil type";
    //     }
    //     break;
    //   case "CAPSICUM":
    //     switch (soilType) {
    //       case "SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "SANDY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       default:
    //         suggestion = "Please select a soil type";
    //     }
    //     break;
    //   case "CARROTS":
    //     switch (soilType) {
    //       case "SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "SANDY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       default:
    //         suggestion = "Please select a soil type";
    //     }
    //     break;
    //   case "CITRUS":
    //     switch (soilType) {
    //       case "SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "SANDY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       default:
    //         suggestion = "Please select a soil type";
    //     }
    //     break;
    //   case "FRUIT TREES":
    //     switch (soilType) {
    //       case "SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "SANDY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       default:
    //         suggestion = "Please select a soil type";
    //     }
    //     break;
    //   case "LEAFY GREENS":
    //     switch (soilType) {
    //       case "SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY SAND":
    //         suggestion = "ABCD";
    //         break;
    //       case "SANDY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY LOAM":
    //         suggestion = "ABCD";
    //         break;
    //       case "LOAMY CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       case "CLAY":
    //         suggestion = "ABCD";
    //         break;
    //       default:
    //         suggestion = "Please select a soil type";
    //     }
    //     break;
    switch (crop) {
        case "ALMONDS":
          switch (soilType) {
            case "SAND":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 8-10L/ha Fortnightly";
              break;
            case "LOAMY SAND":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 4-6L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly";
              break;
            case "SANDY LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 4L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 5-6L/ha Fortnightly";
              break;
            case "LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 3L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 4-5L/ha Fortnightly";
              break;
            case "CLAY LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 2L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 2-3L/ha Fortnightly";
              break;
            case "LOAMY CLAY":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly";
              break;
            case "CLAY":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly";
              break;
            default:
              suggestion = "Please select a soil type";
          }
          break;
        case "AVOCADES":
          switch (soilType) {
            case "SAND":
              suggestion = "DRIP IRRIGATION<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 8-10L/ha Fortnightly";
              break;
            case "LOAMY SAND":
              suggestion = "DRIP IRRIGATION<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly";
              break;
            case "SANDY LOAM":
              suggestion = "DRIP IRRIGATION<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 5-6L/ha Fortnightly";
              break;
            case "LOAM":
              suggestion = "DRIP IRRIGATION<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 4-5L/ha Fortnightly";
              break;
            case "CLAY LOAM":
              suggestion = "DRIP IRRIGATION<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 2-3L/ha Fortnightly";
              break;
            case "LOAMY CLAY":
              suggestion = "DRIP IRRIGATION<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly";
              break;
            case "CLAY":
              suggestion = "DRIP IRRIGATION<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly";
              break;
            default:
              suggestion = "Please select a soil type";
          }
          break;
        case "BERRIES":
          switch (soilType) {
            case "SAND":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly";
              break;
            case "LOAMY SAND":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>Soil Enhancer 4-6L/ha Fortnightly";
              break;
            case "SANDY LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>Soil Enhancer 4L/ha Fortnightly";
              break;
            case "LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>Soil Enhancer 3L/ha Fortnightly";
              break;
            case "CLAY LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>Soil Enhancer 2L/ha Fortnightly";
              break;
            case "LOAMY CLAY":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly";
              break;
            case "CLAY":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly";
              break;
            default:
              suggestion = "Please select a soil type";
          }
          break;
        case "BRASSICAS":
          switch (soilType) {
            case "SAND":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 10L/ha Fortnightly";
              break;
            case "LOAMY SAND":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 8L/ha Fortnightly";
              break;
            case "SANDY LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 6L/ha Fortnightly";
              break;
            case "LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 5L/ha Fortnightly";
              break;
            case "CLAY LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 3L/ha Fortnightly";
              break;
            case "LOAMY CLAY":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly";
              break;
            case "CLAY":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly";
              break;
            default:
              suggestion = "Please select a soil type";
          }
          break;
        case "CAPSICUM":
          switch (soilType) {
            case "SAND":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly";
              break;
            case "LOAMY SAND":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 4-6L/ha Fortnightly";
              break;
            case "SANDY LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 4L/ha Fortnightly";
              break;
            case "LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 3L/ha Fortnightly";
              break;
            case "CLAY LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 2L/ha Fortnightly";
              break;
            case "LOAMY CLAY":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly";
              break;
            case "CLAY":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly";
              break;
            default:
              suggestion = "Please select a soil type";
          }
          break;
        case "CARROTS":
          switch (soilType) {
            case "SAND":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 10L/ha Fortnightly";
              break;
            case "LOAMY SAND":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 8L/ha Fortnightly";
              break;
            case "SANDY LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 6L/ha Fortnightly";
              break;
            case "LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 5L/ha Fortnightly";
              break;
            case "CLAY LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 3L/ha Fortnightly";
              break;
            case "LOAMY CLAY":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly";
              break;
            case "CLAY":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly";
              break;
            default:
              suggestion = "Please select a soil type";
          }
          break;
        case "CITRUS":
          switch (soilType) {
            case "SAND":
              suggestion = "LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 8-10L/ha Fortnightly";
              break;
            case "LOAMY SAND":
              suggestion = "LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly";
              break;
            case "SANDY LOAM":
              suggestion = "LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 5-6L/ha Fortnightly";
              break;
            case "LOAM":
              suggestion = "LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 4-5L/ha Fortnightly";
              break;
            case "CLAY LOAM":
              suggestion = "LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 2-3L/ha Fortnightly";
              break;
            case "LOAMY CLAY":
              suggestion = "LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly";
              break;
            case "CLAY":
              suggestion = "LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly";
              break;
            default:
              suggestion = "Please select a soil type";
          }
          break;
        case "FRUIT TREES":
          switch (soilType) {
            case "SAND":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 8-10L/ha Fortnightly";
              break;
            case "LOAMY SAND":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 4-6L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly";
              break;
            case "SANDY LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 4L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 5-6L/ha Fortnightly";
              break;
            case "LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 3L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 4-5L/ha Fortnightly";
              break;
            case "CLAY LOAM":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 2L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 2-3L/ha Fortnightly";
              break;
            case "LOAMY CLAY":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly";
              break;
            case "CLAY":
              suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly";
              break;
            default:
              suggestion = "Please select a soil type";
          }
          break;
        case "LEAFY GREENS":
          switch (soilType) {
            case "SAND":
              suggestion = "OVERHEAD SPRINKLERS<br>Soil Activator 12-16L/ha Fortnightly<br>Soil Enhancer 16-20L/ha Fortnightly";
              break;
            case "LOAMY SAND":
              suggestion = "OVERHEAD SPRINKLERS<br>Soil Activator 12-16L/ha Fortnightly<br>Soil Enhancer 12-16L/ha Fortnightly";
              break;
            case "SANDY LOAM":
              suggestion = "OVERHEAD SPRINKLERS<br>Soil Activator 5-6L/ha Fortnightly<br>Soil Enhancer 10-12L/ha Fortnightly";
              break;
            case "LOAM":
              suggestion = "OVERHEAD SPRINKLERS<br>Soil Activator 8-10L/ha Fortnightly<br>Soil Enhancer 6-10L/ha Fortnightly";
              break;
            case "CLAY LOAM":
              suggestion = "OVERHEAD SPRINKLERS<br>Soil Activator 8-10L/ha Fortnightly<br>Soil Enhancer 4-6L/ha Fortnightly";
              break;
            case "LOAMY CLAY":
              suggestion = "OVERHEAD SPRINKLERS<br>Soil Activator 8-10L/ha Fortnightly";
              break;
            case "CLAY":
              suggestion = "OVERHEAD SPRINKLERS<br>Soil Activator 8-10L/ha Fortnightly";
              break;
            default:
              suggestion = "Please select a soil type";
          }
          break;
      case "MELONS":
        switch (soilType) {
          case "SAND":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly<br>";
            break;
          case "LOAMY SAND":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 4-6L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>";
            break;
          case "SANDY LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 4L/ha Fortnightly<br>";
            break;
          case "LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 3L/ha Fortnightly<br>";
            break;
          case "CLAY LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 2L/ha Fortnightly<br>";
            break;
          case "LOAMY CLAY":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>";
            break;
          case "CLAY":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>";
            break;
          default:
            suggestion = "Please select a soil type";
        }
        break;
        case "MACADAMIAS":
            switch (soilType) {
              case "SAND":
                suggestion = "Soil Activator 6-10L/ha Fortnightly";
                break;
              case "LOAMY SAND":
                suggestion = "Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly";
                break;
              case "SANDY LOAM":
                suggestion = "Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 5-6L/ha Fortnightly";
                break;
              case "LOAM":
                suggestion = "Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 4-5L/ha Fortnightly";
                break;
              case "CLAY LOAM":
                suggestion = "Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 2-3L/ha Fortnightly";
                break;
              case "LOAMY CLAY":
                suggestion = "Soil Activator 6-10L/ha Fortnightly";
                break;
              case "CLAY":
                suggestion = "Soil Activator 6-10L/ha Fortnightly";
                break;
              default:
                suggestion = "Please select a soil type";
            }
        break;
      case "NUT TREES":
        switch (soilType) {
          case "SAND":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 8-10L/ha Fortnightly";
            break;
          case "LOAMY SAND":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 4-6L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly";
            break;
          case "SANDY LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 4L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 5-6L/ha Fortnightly";
            break;
          case "LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 3L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 4-5L/ha Fortnightly";
            break;
          case "CLAY LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 2L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 2-3L/ha Fortnightly";
            break;
          case "LOAMY CLAY":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br><br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>";
            break;
          case "CLAY":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br><br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>";
            break;
          default:
            suggestion = "Please select a soil type";
        }
        break;
      case "ONIONS":
        switch (soilType) {
          case "SAND":
            suggestion = "OVERHEAD SPRINCLERS<br>Soil Activator L/ha 6-10Fortnightly<br>Soil Enhancer 10L/ha Fortnightly<br>";
            break;
          case "LOAMY SAND":
            suggestion = "OVERHEAD SPRINCLERS<br>Soil Activator L/ha 6-10Fortnightly<br>Soil Enhancer 8L/ha Fortnightly<br>";
            break;
          case "SANDY LOAM":
            suggestion = "OVERHEAD SPRINCLERS<br>Soil Activator L/ha 6-10Fortnightly<br>Soil Enhancer 6L/ha Fortnightly<br>";
            break;
          case "LOAM":
            suggestion = "OVERHEAD SPRINCLERS<br>Soil Activator L/ha 6-10Fortnightly<br>Soil Enhancer 5L/ha Fortnightly<br>";
            break;
          case "CLAY LOAM":
            suggestion = "OVERHEAD SPRINCLERS<br>Soil Activator L/ha 6-10Fortnightly<br>Soil Enhancer 3L/ha Fortnightly<br>";
            break;
          case "LOAMY CLAY":
            suggestion = "OVERHEAD SPRINCLERS<br>Soil Activator L/ha 6-10Fortnightly<br>";
            break;
          case "CLAY":
            suggestion = "OVERHEAD SPRINCLERS<br>Soil Activator L/ha 6-10Fortnightly<br>";
            break;
          default:
            suggestion = "Please select a soil type";
        }
        break;
      case "POME FRUIT":
        switch (soilType) {
          case "SAND":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 8-10L/ha Fortnightly";
            break;
          case "LOAMY SAND":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 4-6L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly";
            break;
          case "SANDY LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 4L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 5-6L/ha Fortnightly";
            break;
          case "LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 3L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 4-5L/ha Fortnightly";
            break;
          case "CLAY LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 2L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 2-3L/ha Fortnightly";
            break;
          case "LOAMY CLAY":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>";
            break;
          case "CLAY":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br><br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>";
            break;
          default:
            suggestion = "Please select a soil type";
        }
        break;
      case "POTATOES":
        switch (soilType) {
          case "SAND":
            suggestion = "OVERHEAD SPRINCLERS<br>Soil Activator L/ha 6-10Fortnightly<br>Soil Enhancer 10L/ha Fortnightly<br>";
            break;
          case "LOAMY SAND":
            suggestion = "OVERHEAD SPRINCLERS<br>Soil Activator L/ha 6-10Fortnightly<br>Soil Enhancer 8L/ha Fortnightly<br>";
            break;
          case "SANDY LOAM":
            suggestion = "OVERHEAD SPRINCLERS<br>Soil Activator L/ha 6-10Fortnightly<br>Soil Enhancer 6L/ha Fortnightly<br>";
            break;
          case "LOAM":
            suggestion = "OVERHEAD SPRINCLERS<br>Soil Activator L/ha 6-10Fortnightly<br>Soil Enhancer 5L/ha Fortnightly<br>";
            break;
          case "CLAY LOAM":
            suggestion = "OVERHEAD SPRINCLERS<br>Soil Activator L/ha 6-10Fortnightly<br>Soil Enhancer 3L/ha Fortnightly<br>";
            break;
          case "LOAMY CLAY":
            suggestion = "OVERHEAD SPRINCLERS<br>Soil Activator L/ha 6-10Fortnightly<br>";
            break;
          case "CLAY":
            suggestion = "OVERHEAD SPRINCLERS<br>Soil Activator L/ha 6-10Fortnightly<br>";
            break;
          default:
            suggestion = "Please select a soil type";
        }
        break;
      case "PUMPKINS":
        switch (soilType) {
          case "SAND":
            suggestion = "DRIP IRRIGATION<br>Soil Activator L/ha 6-10Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly<br>";
            break;
          case "LOAMY SAND":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 4-6L/ha Fortnightly<br>";
            break;
          case "SANDY LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 4L/ha Fortnightly<br>";
            break;
          case "LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 3L/ha Fortnightly<br>";
            break;
          case "CLAY LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 2L/ha Fortnightly<br>";
            break;
          case "LOAMY CLAY":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>";
            break;
          case "CLAY":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 6-10L/ha Fortnightly<br>";
            break;
          default:
            suggestion = "Please select a soil type";
        }
        break;
      case "STONE FRUIT":
        switch (soilType) {
          case "SAND":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 8-10L/ha Fortnightly";
            break;
          case "LOAMY SAND":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 4-6L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 6-8L/ha Fortnightly";
            break;
          case "SANDY LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 6-10L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 4L/ha Fortnightly<br>Soil Enhancer 5-6L/ha Fortnightly";
            break;
          case "LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 3L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 4-5L/ha Fortnightly";
            break;
          case "CLAY LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha Fortnightly<br>Soil Enhancer 2L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>Soil Enhancer 2-3L/ha Fortnightly";
            break;
          case "LOAMY CLAY":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 3-4L/ha<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha ";
            break;
          case "CLAY":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>LOW-LEVEL SPRINKLERS<br>Soil Activator 6-10L/ha Fortnightly<br>";
            break;
          default:
            suggestion = "Please select a soil type";
        }
        break;
      case "STRAWBERRIES":
        switch (soilType) {
          case "SAND":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>Soil Enhancer 6-8L/ha";
            break;
          case "LOAMY SAND":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>Soil Enhancer 4-6L/ha";
            break;
          case "SANDY LOAM":
            suggestion = "";
            break;
          case "LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>Soil Enhancer 4L/ha";
            break;
          case "CLAY LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>Soil Enhancer 2L/ha";
            break;
          case "LOAMY CLAY":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha";
            break;
          case "CLAY":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha";
            break;
          default:
            suggestion = "Please select a soil type";
        }
        break;
      case "VINES":
        switch (soilType) {
          case "SAND":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>Soil Enhancer 6-8L/ha";
            break;
          case "LOAMY SAND":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>Soil Enhancer 4-6L/ha";
            break;
          case "SANDY LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>Soil Enhancer 4L/ha";
            break;
          case "LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>Soil Enhancer 3L/ha";
            break;
          case "CLAY LOAM":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha Fortnightly<br>Soil Enhancer 2L/ha";
            break;
          case "LOAMY CLAY":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha";
            break;
          case "CLAY":
            suggestion = "DRIP IRRIGATION<br>Soil Activator 5-6L/ha";
            break;
          default:
            suggestion = "Please select a soil type";
        }
        break;
  
      default:
        suggestion = "Please select a crop";
    }
  
    document.getElementById("suggestion").innerHTML = suggestion;
  }
  