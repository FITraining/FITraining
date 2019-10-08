{
    "id": "kiel:kiellinie",
    "type": "OnStreetParking",
    "category": {
        "value": ["blueZone","free", "forDisabled"]
    },
    "permitActiveHours": {
        "value": {
            "blueZonePermit": "Mo, Tu, We, Th, Fr, Sa, So"
        }
    },
    "requiredPermit": {
        "value": ["blueZonePermit", "disabledPermit"]
    },
    "allowedVehicleType": {
        "value": "car"
    },
    "chargeType": {
        "value": ["free"]
    },
    "totalSpotNumber": {
        "value": 17
    },
    "location": {
        "type": "geo:json",
        "value": {
            "type": "Polygon",
            "coordinates": [
                [
                    [10.156358, 54.341588],
                    [10.156430, 54.341615],
                    [10.156607, 54.341147],
                    [10.156543, 54.341110],
                    [10.156358, 54.341588]
                ]
            ]
        }
    },
}