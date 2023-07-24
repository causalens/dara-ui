import { faSyringe } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * Syringe icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const Syringe = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faSyringe} {...props} />;
};

export default Syringe;
