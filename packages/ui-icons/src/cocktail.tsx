import { faCocktail } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Cocktail icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Cocktail = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faCocktail} {...props} />;
};

export default Cocktail;
