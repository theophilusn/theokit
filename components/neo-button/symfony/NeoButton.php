<?php

namespace App\Twig\Components;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;
use Symfony\UX\TwigComponent\Attribute\PropsTrait;

#[AsTwigComponent("neo_button")]
class NeoButton
{
    use PropsTrait;
}
