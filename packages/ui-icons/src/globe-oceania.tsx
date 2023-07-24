import { faGlobeOceania } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * GlobeOceania icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const GlobeOceania = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faGlobeOceania} {...props} />;
};

export default GlobeOceania;
