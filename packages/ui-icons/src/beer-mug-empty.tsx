import { faBeerMugEmpty } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * BeerMugEmpty icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const BeerMugEmpty = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faBeerMugEmpty} {...props} />;
};

export default BeerMugEmpty;
