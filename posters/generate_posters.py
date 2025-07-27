from PIL import Image, ImageDraw, ImageFont
from os import listdir
from os.path import isfile, join

# Open the two images you want to combine
marker_x = 208
marker_y = 500
marker_size = 1000

qrcode_x = 208
qrcode_y = 1677
qrcode_size = 250

number_x = 1360
number_y = 20
number_size = 25

qr_code = Image.open("qrcode.png").resize((qrcode_size, qrcode_size))

for m_path in [f for f in listdir("./markers")]:
    try:
        template = Image.open("template.png")
        m_image = Image.open("./markers/" + m_path).resize((marker_size, marker_size))
        

        template.paste(m_image, (marker_x, marker_y))
        template.paste(qr_code, (qrcode_x, qrcode_y))

        im = ImageDraw.Draw(template)
        font = ImageFont.truetype("arial.ttf", number_size)
        im.text((number_x, number_y), m_path.replace(".png",""), (0, 0, 0), font=font)

        template.save("./filled/"+m_path)   
    except Exception as e:
        print(e)


# Close the images (optional)
template.close()
