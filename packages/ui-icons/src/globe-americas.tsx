import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GlobeAmericas icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GlobeAmericas = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGlobeAmericas} {...props} />;
};

export default GlobeAmericas;
