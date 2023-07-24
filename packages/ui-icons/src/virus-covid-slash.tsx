import { faVirusCovidSlash } from '@fortawesome/free-solid-svg-icons';

import { IconProps, StyledFAIcon } from './icon-utils';

/**
 * VirusCovidSlash icon from FontAwesome
 *
 * @param {IconProps} props - the component props
 */
const VirusCovidSlash = (props: IconProps): JSX.Element => {
    return <StyledFAIcon icon={faVirusCovidSlash} {...props} />;
};

export default VirusCovidSlash;
